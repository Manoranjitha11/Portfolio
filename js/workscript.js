function imageLoad() {
  console.log('dfd');
var lazy = $(".lazy");
for(var i = 0; i < lazy.length; i++) {
  var _this = lazy[i];
  var image = $(_this).data('original');
  console.log(image);
  $(_this).attr("src", image);
}
}