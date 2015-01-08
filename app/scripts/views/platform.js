(function (view) {
  'use strict';
  //主框架，用来书写 header 和 footer 脚本
  view.platform = {};

  $.extend(view.platform, {
    init: function () {
      this.initEvent();
    },
    initEvent: function () {
      $('#login').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#loginPanel').show();
        $('#aboutMenu').hide();
        $('#about').find('i').removeClass().addClass('white-downArrow');
      });

      $('#loginBtn').click(function(){
        //$.ajax({
        //  type: 'post',
        //  dataType: 'json',
        //  url:'json/login.json',
        //  success : function (data) {
        //    if (data.success === true) {
        //      console.info('登录成功！');
        //      $('#afterLoginNav').show();
        //      $('#loginNav').hide();
        //    }
        //  }
        //});

        $('#afterLoginNav').show();
        $('#loginNav').hide();
      });

      $('#logout').click(function(){
        $('#afterLoginNav').hide();
        $('#loginNav').show();
      });

      $('#about').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(e.currentTarget).find('i').removeClass().addClass('white-upArrow');
        $('#aboutMenu').toggle();
        $('#loginPanel').hide();
      });

      $(document).click(function (e) {
        var el = $(e.target);
        if (el.closest('#aboutMenu,#loginPanel').length > 0) {
          return;
        }
        $('#aboutMenu,#loginPanel').hide();
        $('#about').find('i').removeClass().addClass('white-downArrow');
      });

      $('#menuList').on('mouseenter', '>li', function (e) {
        e.stopPropagation();
        var $el = $(e.currentTarget);
        $el.find('>div').show();
        $el.find('>a>i').removeClass().addClass('gray-upArrow');
        $el.siblings().find('>div').hide();
        $el.siblings().find('>a>i').removeClass().addClass('gray-downArrow');
      }).on('mouseleave', '>li',function(e){
        var $el = $(e.currentTarget);
        $el.find('>div').hide();
        $el.find('>a>i').removeClass().addClass('gray-downArrow');
      });

      //tab event
      $('#tabMenu').on('mouseenter','>li>a',function(e){
        var $el = $(e.target);
        var subTab = $el.data('sub-tab');
        $el.addClass('current').parent().siblings().children('a').removeClass('current');
        $('#subTabContainer > div').hide();
        $(subTab).show();
      });
    }
  });

})(hopeView);
