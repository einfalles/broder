var colors = ['#C62828','#2196F3','#7986CB','#673AB7','#3F51B5','#3949AB','#009688','#283593','#1A237E'];
// Math.floor((Math.random() * 9));
var places = ['swish.jpg','diamond.jpg','pattern.jpg','raw.jpg','staples.jpg']
var polys = document.querySelectorAll('[data-id]');

for (i=0;i<polys.length;i++) {
  if (polys[i].dataset.id != "0"){
    var colorIndex = Math.floor((Math.random() * 5));
    var url = places[colorIndex]
    // polys[i].style.backgroundImage = "url("+url+")";
  } else {
    console.log("ZERO");
  }
}
$(document).ready(function(){
  $('.polygon[data-id="8"]').mouseover(function(){
    $('.trapezoid').css('border-bottom-width','40px');
  });
});
(function() {

	function init() {
		var speed = 350,
			easing = mina.easeinout;
    var market = $('.trap-content');
    var rotation = 0;
    var antirotation = -52;
		[].slice.call ( document.querySelectorAll( '.svg-hover' ) ).forEach( function( el ) {
      console.log(el.parentElement);
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};
        console.log(document.getElementsByClassName('fucker'));
        // el = document.getElementById('poly-targ');
        var targ = document.getElementById('poly-targ');
        if (targ != null) {
          el = targ
          antirotation = -60;
          el.addEventListener( 'mouseleave', function() {
    				path.animate( { 'path' : pathConfig.from }, speed, easing );
            market.css({
            '-webkit-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             '-moz-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             '-ms-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             'transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)'});
    			} );
          el.addEventListener( 'mouseenter', function() {
    				path.animate( { 'path' : pathConfig.to }, speed, easing );
            market.css({
                '-webkit-transform' :'translate(-15px,50px) '+'rotate('+ rotation +'deg)',
                     '-moz-transform' : 'translate(-15px,50px) '+'rotate('+ rotation +'deg)',
                     '-ms-transform' : 'translate(-15px,50px) '+'rotate('+ rotation +'deg)',
                     'transform' : 'translate(-15px,50px) '+'rotate('+ rotation +'deg)'});
    			} );
        } else {
          el = el.parentElement.parentElement;
          el.addEventListener( 'mouseleave', function() {
    				path.animate( { 'path' : pathConfig.from }, speed, easing );
            market.css({
            '-webkit-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             '-moz-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             '-ms-transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)',
                             'transform' : 'translate(0%,0%) '+'rotate('+ antirotation +'deg)'})
    			} );
          el.addEventListener( 'mouseenter', function() {
    				path.animate( { 'path' : pathConfig.to }, speed, easing );
            market.css({
                '-webkit-transform' :'translate(-20px,20px) '+'rotate('+ rotation +'deg)',
                     '-moz-transform' : 'translate(-20px,20px) '+'rotate('+ rotation +'deg)',
                     '-ms-transform' : 'translate(-20px,20px) '+'rotate('+ rotation +'deg)',
                     'transform' : 'translate(-20px,20px) '+'rotate('+ rotation +'deg)'})
    			} );
        }




		} );
	}

	init();

})();
