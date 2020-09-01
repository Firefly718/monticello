$(document).ready(function() {
  $('.slider-one').slick({
      dots: true,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      draggable: true,
      verticalSwiping: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplaySpeed: 6000,
      cssEase: 'linear',
      focusOnSelect: true
  });
  $('.slider-two').slick({
      dots: true,
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 569,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});


function initMap() {
  let geo = {
    lat: 40.677963,
    lng: -73.896072
  }
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: geo,
     styles: [{
         "elementType": "geometry",
         "stylers": [{
           "color": "#f5f5f5"
         }]
       },
       {
         "elementType": "labels.icon",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#616161"
         }]
       },
       {
         "elementType": "labels.text.stroke",
         "stylers": [{
           "color": "#f5f5f5"
         }]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#bdbdbd"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [{
           "color": "#eeeeee"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#757575"
         }]
       },
       {
         "featureType": "poi.business",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [{
           "color": "#e5e5e5"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       },
       {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [{
           "color": "#ffffff"
         }]
       },
       {
         "featureType": "road.arterial",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#757575"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [{
           "color": "#dadada"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#616161"
         }]
       },
       {
         "featureType": "road.local",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.local",
         "elementType": "labels",
         "stylers": [{
           "visibility": "off"
         }]
       },
       {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       },
       {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [{
           "color": "#e5e5e5"
         }]
       },
       {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [{
           "color": "#eeeeee"
         }]
       },
       {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [{
           "color": "#c9c9c9"
         }]
       },
       {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [{
           "color": "#9e9e9e"
         }]
       }
     ]
  });

  let marker = new google.maps.Marker({
    position: geo,
    map: map,
    icon: './img/marker.png',
    title: '91 Nolan'
  });
}

// burger
$(document).ready(function(){
  $("#header > nav > div.nav__burger").click(function() {
    $("#header > nav > div.nav__links").toggle('slow', 'swing');
    // $("#header > nav > ul").toggleClass("social-left");
  });
});





// ellipsis
$('.foo').ellipsis();

// ellipsis settings
$('.foo').ellipsis({
  lines: 3,             // force ellipsis after a certain number of lines. Default is 'auto'
  ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
  responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
});






// // remove vertical line (icon) in footer after 310px
// function removeIcon(x) {
//   if (x.matches) { // If media query matches
//     $("#footer > div > div.footer__caption > p.footer__prod").remove('|');
//     $("#footer > div > div.footer__caption > p.footer__copyright").remove('|');
//   } 
//   // else {
//   //   document.body.style.backgroundColor = "pink";
//   // }
// }

// var x = window.matchMedia("(max-width: 310px)")
// removeIcon(x) // Call listener function at run time
// x.addListener(removeIcon) // Attach listener function on state changes

