$(document).ready(function () {
//    $("#content").append("<img src=\"" + getMapImageUrl(60, 40) + "\"");
    $('div.image').click(function () {
        $(this).children(".map").toggle();
        $(this).children(".picture").toggle();
    });
});

function getMapImageUrl(latitude, longitude) {
    return "http://maps.googleapis.com/maps/api/staticmap?zoom=4&size=480x480&markers=color:blue%7C" +
        latitude + "," + longitude + "&sensor=false"
}

function getCurrentPosition(callback) {
    // Try HTML5 geolocation
    var latitude = null;
    var longitude = null;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            callback({latitude: latitude, longitude: longitude});
        }, function () {
            callback(null);
        });
    } else {
        callback(null);
    }
}