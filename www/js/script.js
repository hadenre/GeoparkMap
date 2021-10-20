var menuBTN = document.querySelector('#menuBTN');
var menu = document.querySelector('.menu');

var blueMarkers = document.querySelectorAll('.blueMarker');
var blueMarkerBTN = document.querySelector('#blueMarkerBTN');

var redMarkers = document.querySelectorAll('.redMarker');
var redMarkerBTN = document.querySelector('#redMarkerBTN');

var greenMarkers = document.querySelectorAll('.greenMarker');
var greenMarkerBTN = document.querySelector('#greenMarkerBTN');

var purpleMarkers = document.querySelectorAll('.purpleMarker');
var purpleMarkerBTN = document.querySelector('#purpleMarkerBTN');

var orangeMarkers = document.querySelectorAll('.orangeMarker');
var orangeMarkerBTN = document.querySelector('#orangeMarkerBTN');

var greyMarkers = document.querySelectorAll('.greyMarker');
var greyMarkerBTN = document.querySelector('#greyMarkerBTN');

var yellowMarkers = document.querySelectorAll('.greyMarker');
var yellowMarkerBTN = document.querySelector('#greyMarkerBTN');

//var overlayBTN = document.querySelector('#overlayBTN');
//var overlay = document.querySelector('.overlay_a');

//console.log(markers)

menuBTN.addEventListener('click', () => {
    menu.classList.toggle('menu-closed');
})


//overlayBTN.addEventListener('click', () => {
   // overlay.classList.toggle('overlay');
//})

blueMarkerBTN.addEventListener('click', () => {
    blueMarkers.forEach(blueMarker => {
        blueMarker.classList.toggle('hideMarker');
    });
})

redMarkerBTN.addEventListener('click', () => {
    redMarkers.forEach(redMarker => {
        redMarker.classList.toggle('hideMarker');
    });
})

greenMarkerBTN.addEventListener('click', () => {
    greenMarkers.forEach(greenMarker => {
        greenMarker.classList.toggle('hideMarker');
    });
})

purpleMarkerBTN.addEventListener('click', () => {
    purpleMarkers.forEach(purpleMarker => {
        purpleMarker.classList.toggle('hideMarker');
    });
})

orangeMarkerBTN.addEventListener('click', () => {
    orangeMarkers.forEach(orangeMarker => {
        orangeMarker.classList.toggle('hideMarker');
    });
})

greyMarkerBTN.addEventListener('click', () => {
    greyMarkers.forEach(greyMarker => {
        greyMarker.classList.toggle('hideMarker');
    });
})

yellowMarkerBTN.addEventListener('click', () => {
    yellowMarkers.forEach(yellowMarker => {
        yellowMarker.classList.toggle('hideMarker');
    });
})