(function (view) {
  'use strict';
  view.index = {};

  //首页 脚本
  $.extend(view.index, {
    init: function () {
      this.flexSlider();
    },
    flexSlider: function(){
      // The slider being synced must be initialized first
      $('#flexSlider').flexslider({
        slideshowSpeed: 3500,
        animationSpeed: 300,
        animation: 'slide',
        controlNav: 'thumbnails',
        controlsContainer: '#controlsContainer'
      });
    }
  });

})(hopeView);


