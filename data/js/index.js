// JavaScript Document
function play(instance, uri) {
    VLCobject.getInstance(instance).play(uri);
}

var player = null;
$(document).ready(function() {
    $('#vlc1').html('<embed type="application/x-vlc-plugin" toolbar="false" width="100%" height="100%" id="vlc_vid1" target="http://URL"></embed>');
    $('#vlc2').html('<embed type="application/x-vlc-plugin" toolbar="false" width="100%" height="100%" id="vlc_vid2" target="http://URL"></embed>');
    $('#vlc3').html('<embed type="application/x-vlc-plugin" toolbar="false" width="100%" height="100%" id="vlc_vid3" target="http://URL"></embed>');
    $('#vlc4').html('<embed type="application/x-vlc-plugin" toolbar="false" width="100%" height="100%" id="vlc_vid4" target="http://URL"></embed>');
});