document.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(markPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function markPosition(position) {
    const currentLocation = position.coords.longitude + "," + position.coords.lattitude
    return currentLocation
}
