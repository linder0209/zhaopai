(function (view) {
  view.index = {};

  $.extend(view.index,{
    init: function(){
      this.initEvent();
    },
    initEvent: function(){
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

      $(document.body).click(function(e){
        var el = $(e.target);
        if(el.closest('#aboutMenu,#loginPanel').length > 0){
          return;
        }
        $('#aboutMenu,#loginPanel').hide();
        $('#about').find('i').removeClass().addClass('white-downArrow');
      });
    }
  });

})(ZP_View);
