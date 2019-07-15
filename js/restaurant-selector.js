var restaurants = [
  {name: "Cook Out", coords:{lat:35.140730,lng:-80.735529}},
  {name: "Kentucky Fried Chicken", coords:{lat:35.193522,lng:-80.795222}},
  {name: "McDonalds", coords:{lat:35.183293, lng:-80.759337}},
  {name: "Costco", coords:{lat:35.130173, lng: -80.704982}},
  {name: "21 South Drive In", coords: {lat:35.203351, lng:-80.790616}},
  {name: "Seoul Food", coords: {lat:35.219263, lng:-80.857579}},
  {name: "Midnight Diner", coords: {lat:35.219558, lng:-80.852221}},
  {name: "JJ Red Hots", coords: {lat:35.199979, lng:-80.842400}},
  {name: "Taipei Express", coords: {lat:35.199843, lng:-80.825259}},
  {name: "Cowbell", coords: {lat:35.228537, lng:-80.842344}},
  {name: "Mr. Tokyo", coords: {lat:35.126808, lng:-80.708284}},
  {name: "Taco Bell", coords: {lat:35.140805, lng:-80.733992}},
  {name: "Soho Bistro", coords: {lat:35.227608, lng:-80.840376}}
];

var map, marker, infowindow;

function getRestaurant() {
  return restaurants[Math.floor(Math.random() * restaurants.length)];
}

function initMap() {
  //Map options
  var options = {
    zoom:11,
    center: {lat: 35.2271, lng: -80.8431 }
  }
  //New Map
  map = new google.maps.Map(document.getElementById('map'), options);
}

function addMarker(restaurant){
  marker = new google.maps.Marker({
    position: restaurant.coords,
    title: restaurant.name,
    animation: google.maps.Animation.BOUNCE,
  })
  infowindow = new google.maps.InfoWindow({
    content: restaurant.name
  })
  marker.setMap(map);

}

$(document).ready(function() {
  $(".btn").click(function() {
    $("#result").css({ animation: "shake 0.2s", display: "inline-block" });
    //$("#map").css("display", "block");
    $("#init-text").css("display", "none");
    setTimeout(function() {
      $("#result").css("animation", "");
    }, 200);
  });

  $(".roll1").click(function() {
    try {
      marker.setMap(null);
    } catch (error) {
      //do nothing if no marker is set
    }
    restaurant = getRestaurant()
    var result = restaurant.name;
    addMarker(restaurant);
    $("#result").text(result);

  });

  $(".roll3").click(function() {
    try {
      marker.setMap(null);
    } catch (error) {
      //do nothing if no marker is set
    }
    var result = [];
    while (result.length < 3) {
      restaurant = getRestaurant();
      if (result.includes(restaurant)) {
      } else {
        result.push(restaurant);
        //addMarker(restaurant);
      }
    }
    $("#result").text(result[0].name + ", " + result[1].name + ", " + result[2].name);
  });

  $(".eat-out").click(function() {
    try {
      marker.setMap(null);
    } catch (error) {
      //do nothing if no marker is set
    }
    var eatOut = Math.random() >= 0.65;
    if (eatOut == true) {
      var restaurant = getRestaurant();
      $("#result").text("Eat out at " + restaurant.name);
      addMarker(restaurant);
      // map.setCenter(restaurant.coords);
      // map.setZoom(15);
    } else {
      $("#result").text("Eat at home");
    }
  });
});
