var map, marker, infowindow;
var markers = [];

function getRestaurant() {
  return restaurants[Math.floor(Math.random() * restaurants.length)];
}

function initMap() {
  //Map options
  var options = {
    zoom: 11,
    center: { lat: 35.2271, lng: -80.8431 }
  }
  //New Map
  map = new google.maps.Map(document.getElementById('map'), options);

  for (restaurant of restaurants) {
    markers[restaurant.name] = new google.maps.Marker({
      position: restaurant.coords,
      map: map,
      title: restaurant.name,
      animation: google.maps.Animation.BOUNCE,
      visible: false
    });
  }
  console.log(markers);
  console.log(markers.length);
}

function removeMarker() {
  for (restaurant of restaurants) {
    if (markers[restaurant.name].getVisible() == true) {
      markers[restaurant.name].setVisible(false);
      console.log("removed");
    }
  }
}

$(document).ready(function () {

  $(".btn").click(function () {
    $("#result").css({ animation: "shake 0.2s", display: "inline-block" });
    //$("#map").css("display", "block");
    $("#init-text").css("display", "none");
    setTimeout(function () {
      $("#result").css("animation", "");
    }, 200);
  });

  $(".roll1").click(function () {
    removeMarker();
    restaurant = getRestaurant();
    var result = restaurant.name;
    markers[restaurant.name].setVisible(true);
    $("#result").text(result);
  });

  $(".roll3").click(function () {
    removeMarker();
    var result = [];
    while (result.length < 3) {
      restaurant = getRestaurant();
      if (result.includes(restaurant)) {
      } else {
        result.push(restaurant);
        markers[restaurant.name].setVisible(true);
      }
    }
    $("#result").text(
      `${result[0].name}, ${result[1].name}, and ${result[2].name}`
    );
  });

  $(".eat-out").click(function () {
    removeMarker();
    var eatOut = Math.random() >= 0.65;
    if (eatOut == true) {
      var restaurant = getRestaurant();
      $("#result").text(`Eat out at ${restaurant.name}`);
      markers[restaurant.name].setVisible(true);
      // map.setCenter(restaurant.coords);
      // map.setZoom(15);
    } else {
      $("#result").text("Eat at home");
    }
  });
});
