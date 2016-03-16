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
