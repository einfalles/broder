$(document).ready(function(){
  var fakeMargins = $(".header").height()*2;
  var mainWidth = $(window).width()-fakeMargins;
  $('.main').width(mainWidth);
  $('.header').width(mainWidth);
  $('#menu-select').change(function(){
    console.log(this.value);
    if (this.value == 'eat-ost') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'eat-nord') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
    if (this.value == 'eat-cafe') {
      var item = '#' + this.value;
      $(item).show();
      $('.content .section').not($(item)).hide();
    }
  });
});
