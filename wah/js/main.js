$(document).ready(function(){
  var fakeMargins = $(".header").height()*2;
  var mainWidth = $(window).width()-fakeMargins;
  $('.main').width(mainWidth);
  $('.header').width(mainWidth);
  $('.header').css('display','none');
  $('.footer').width(mainWidth);
  $('#menu-select').change(function(){
    console.log(this.value);
    if (this.value == 'eat-ost') {
      var item = '#' + this.value;
      $(item).show();
      $('.main .content').not($(item)).hide();
    }
    if (this.value == 'eat-nord') {
      var item = '#' + this.value;
      $(item).show();
      $('.main .content').not($(item)).hide();
    }
    if (this.value == 'eat-cafe') {
      var item = '#' + this.value;
      $(item).show();
      $('.main .content').not($(item)).hide();
    }
    if (this.value == 'eat-soder') {
      var item = '#' + this.value;
      $(item).show();
      $('.main .content').not($(item)).hide();
    }
  });

  var places = ['Hello','Howdy','Good Morning','Whats up?','Hi']
  //  setInterval(hello, 600);
  setInterval(function(){
    var helloIndex = Math.floor((Math.random() * 5));
    $('.hallo__wrapper h1').fadeOut(300,function(){
      var $this = $(this);
      $this.text(places[helloIndex]);
      $this.fadeIn(500);
    });
  },6000);
  pos_hallo();
  function pos_hallo() {
    var bottom = $("#cafe").height() + $("#cafe").offset()['top']-130;
    var right = $("#cafe").offset()['left'] + $("#cafe").width()-130;
    var pos = {'bottom': bottom, 'right': right};
    $(".hallo").css('top', pos['bottom']);
    $(".hallo").css('left', pos['right']);
  }

});
