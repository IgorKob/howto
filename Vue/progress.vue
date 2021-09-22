// показує шкалу загрузки
submit() {
    const formdata = this.appendFormData();

    if (this.areRequiredFieldsValid()) {
        this.sending = true;
        this.$root.sharedQuestion = '';

        axios.post(this.route('media.upload'), formdata, this.getUploadSettings())
            .then(this.handleSubmitResponse)
            .catch(this.handleSubmitError)
            .finally(() => this.sending = false);
    }
},

getUploadSettings() {
  return {
      onUploadProgress: ({ loaded, total }) => {
          const percent = Math.floor((loaded * 100) / total);
          if (percent < 100) {
              this.progress = percent;
          }
          console.log('percent: ', percent)
      }
  }
},
