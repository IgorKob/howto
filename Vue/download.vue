// архівування і скачування відео файлів
public function download(BulkMedia $BulkMedia) {
    if((Auth::user()->isAdmin() || Auth::user()->isSuperAdmin()) && $BulkMedia->isApproved()) {
        return response()->streamDownload(function() use ($BulkMedia) {
            $opt = new ArchiveOptions();
            $opt->setContentType('application/octet-stream');
            $zip = new ZipStream("uploads.zip", $opt);
            foreach ($BulkMedia->media as $media) {
                try {
                    $file = Storage::disk(config('app.media_storage'))->readStream($media->getRealPath());
                    $zip->addFileFromStream(File::basename($media->getRealPath()), $file);
                }
                catch (Exception $e) {
                    \Log::error("unable to read the file at storage path:  and output to zip stream. Exception is " . $e->getMessage());
                }
            }
            $zip->finish();
        }, "BulkMedia_$BulkMedia->id.zip");
    }

    return response('', 403);
}
