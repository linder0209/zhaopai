(function (view) {
  'use strict';
  view.myzp = {};

  //我的找拍
  $.extend(view.myzp, {
    init: function () {
      $('#navController').on('click', '>li',function(e){
        var el = $(e.currentTarget);
        el.addClass('active').siblings().removeClass('active');
        var link = el.data('link');
        document.location.hash = link;
        $.ajax({
          type: 'get',
          dataType: 'text',
          url:'./templates/'+link + '.html',
          success : function (html) {
            $('#panelContent').html(html);
            if(link === 'exchange-records.html'){
              $('#recordsNav').off().on('click', '>li',function(e){
                var el = $(e.currentTarget);
                el.addClass('active').siblings().removeClass('active');
                var tab = el.data('sub-tab');
                if(tab === '#exchangeRecords'){
                  $('#exchangeRecords').show();
                  $('#cashRecords').hide();
                }else{
                  $('#exchangeRecords').hide();
                  $('#cashRecords').show();
                }
              });
            }else if(link === 'information.html'){
              $('#updateHeadPortrait').unbind('click').click(function(e){
                $('#myInfo').hide();
                $('#myHeadPortrait').show();
              });
              $('#saveUpload').unbind('click').click(function(e){
                $('#myInfo').show();
                $('#myHeadPortrait').hide();
              });
            }
          }
        });
      });

      var link = document.location.hash;
      link = link ? link.substring(1):  'information';
      $('#navController >li[data-link="' + link + '"]').click();
    }

  });

})(hopeView);
