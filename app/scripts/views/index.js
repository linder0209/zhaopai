(function (view) {
  'use strict';
  view.index = {};

  $.extend(view.index, {
    init: function () {
      this.initEvent();
      this.flexSlider();
    },
    initEvent: function () {
      $('#login').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#loginPanel').show();
        $('#aboutMenu').hide();
        $('#about').find('i').removeClass().addClass('white-downArrow');
      });

      $('#about').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(e.currentTarget).find('i').removeClass().addClass('white-upArrow');
        $('#aboutMenu').show();
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
        var $el = $(e.target);
        var $parentEl = $el.closest('ul');
        //reset
        $parentEl.find('li>div').hide();
        $parentEl.find('li>a>i').removeClass().addClass('gray-downArrow');
        $el.find('>div').show();
        $el.find('>a>i').addClass('gray-upArrow');
      }).on('mouseleave',function(){
        var $el = $(e.target);
        $el.find('>div').hide();
        $el.find('>a>i').removeClass().addClass('gray-downArrow');
      });
    },
    flexSlider:function(){
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });
    }

  });

})(hopeView);
