// php metodth
dd(get_class_methods($Podcasting->assignee_ids[$key]));

// реквест витягнути
public function storeAgain(Request $request) {
    if($request->getContentType() == 'json') {
        $body = $request->getContent();
        $json = json_decode($body, true);
        dd($json);
}
