$(document).ready(function(){
  var fakeMargins = $(".header").height()*2
  var mainWidth = $(window).width()-fakeMargins
  $('.main').width(mainWidth)
});
