var name = "grades";
var url = "http://anyorigin.com/go?url=" + encodeURIComponent("http://vastheap.com/") + name + "&callback=?";
$.get(url, function(response) {
  $("#total").html("Text added by jQuery code.");
});
