const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// ----------------- portfolio --------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } 
    else {
      panel.style.display = "block";
    }
  });
}

// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Viramgam
//   const position = { lat: 23.1260895087518, lng: 72.05403209884923 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Viramgam
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Viramgam
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Viramgam",
//   });
// }

// initMap();