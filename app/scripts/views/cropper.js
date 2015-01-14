 'use strict';
  function CropAvatar($element) {
    this.$container = $element;

    this.$avatarForm = this.$container.find('.avatar-form');

    this.$avatarSrc = this.$avatarForm.find(".avatar-src");
    this.$avatarData = this.$avatarForm.find(".avatar-data");
    this.$avatarInput = this.$avatarForm.find(".avatar-input");

    this.$avatarSave = this.$avatarForm.find(".avatar-save");

    this.$avatarWrapper = this.$container.find(".avatar-wrapper");

    this.$loading = this.$container.find(".loading");

    this.init();
  }

  CropAvatar.prototype = {
    constructor: CropAvatar,

    support: {
      fileList: !!$('<input type="file">').prop('files'),
      fileReader: !!window.FileReader,
      formData: !!window.FormData
    },

    init: function () {
      this.support.datauri = this.support.fileList && this.support.fileReader;

      if (!this.support.formData) {
        this.initIframe();
      }
      this.addListener();
    },

    addListener: function () {
      this.$avatarInput.on('change', $.proxy(this.change, this));
	  this.$avatarSave.click($.proxy(this.submit, this))
    },

    change: function () {
      var files,
        file;

      if (this.support.datauri) {
        files = this.$avatarInput.prop('files');

        if (files.length > 0) {
          file = files[0];

          if (this.isImageFile(file)) {
            this.read(file);
          }
        }
      } else {
        file = this.$avatarInput.val();

        if (this.isImageFile(file)) {
          this.syncUpload();
        }
      }
    },

    submit: function () {
      if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
        return false;
      }

      if (this.support.formData) {
        this.ajaxUpload();
        return false;
      }
    },

    read: function (file) {
      var _this = this,
        fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = function () {
        _this.url = this.result;
        _this.startCropper();
      };
    },

    ajaxUpload: function () {
      var url = this.$avatarForm.attr("action"),
        _this = this;
		
		var data = this.$img.cropper("getImageData");
		console.info(data);
		
		

      $.ajax(url, {
        type: "post",
        dataType: 'json',
        data: data,
        processData: false,
        contentType: false,

        beforeSend: function () {
          _this.submitStart();
        },

        success: function (data) {
          _this.submitDone(data);
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
          _this.submitFail(textStatus || errorThrown);
        },

        complete: function () {
          _this.submitEnd();
        }
      });
    },

    submitStart: function () {
      this.$loading.fadeIn();
    },

    submitDone: function (data) {

      if (data && data.success === true) {
        if (data.result) {
          this.url = data.result;

          if (this.support.datauri || this.uploaded) {
            this.uploaded = false;
          } else {
            this.uploaded = true;
            this.$avatarSrc.val(this.url);
            this.startCropper();
          }

          this.$avatarInput.val("");
        } else if (data.message) {
          alert(data.message);
        }
      } else {
        alert("上传失败！");
      }
    },

    submitFail: function (msg) {
      alert(msg);
    },

    submitEnd: function () {
      this.$loading.fadeOut();
    },

    startCropper: function () {
      var _this = this;

      if (this.active) {
        this.$img.cropper('replace', this.url);
      } else {
        this.$img = $('<img src="' + this.url + '">');
        this.$avatarWrapper.empty().html(this.$img);
        this.$img.cropper({
          aspectRatio: 1,
          done: function (data) {
            var json = [
              '{"x":' + data.x,
              '"y":' + data.y,
              '"height":' + data.height,
              '"width":' + data.width + "}"
            ].join();

            _this.$avatarData.val(json);
          }
        });

        this.active = true;
      }
    },


    isImageFile: function (file) {
      if (file.type) {
        return /^image\/\w+$/.test(file.type);
      } else {
        return /\.(jpg|jpeg|png|gif)$/.test(file);
      }
    },

    initIframe: function () {
      var iframeName = "avatar-iframe-" + Math.random().toString().replace(".", ""),
        $iframe = $('<iframe name="' + iframeName + '" style="display:none;"></iframe>'),
        firstLoad = true,
        _this = this;

      this.$iframe = $iframe;
      this.$avatarForm.attr("target", iframeName).after($iframe);

      this.$iframe.on("load", function () {
        var data,
          win,
          doc;

        try {
          win = this.contentWindow;
          doc = this.contentDocument;

          doc = doc ? doc : win.document;
          data = doc ? doc.body.innerText : null;
        } catch (e) {
        }

        if (data) {
          _this.submitDone(data);
        } else {
          if (firstLoad) {
            firstLoad = false;
          } else {
            _this.submitFail("Image upload failed!");
          }
        }

        _this.submitEnd();
      });
    }
  };

