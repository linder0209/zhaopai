(function (view) {
  'use strict';
  view.exchange = {};

  //我的找拍
  $.extend(view.exchange, {
    init: function () {
      $('#navController').on('click', '>li',function(e){
        var el = $(e.currentTarget);
        el.addClass('active').siblings().removeClass('active');
        var link = el.data('link');
        $(link === '#tab1'?'#tab2':'#tab1').hide();
        $(link).show();
      });

      $('#navController >li:eq(0)').click();
    }

  });

})(hopeView);
