var restaurants = [
    "Cook Out",
    "Kentucky Fried Chicken",
    "McDonalds",
    "Costco",
    "21 South",
    "Seoul Food",
    "Midnight Diner",
    "JJ Red Hots",
    "Taipei Express",
    "Cowbell",
    "Mr. Tokyo",
    "Taco Bell",
    "Soho Bistro",
    "Eat at Home"
]

$(document).ready(function(){
    $('.roll1').click(function(){
        var result = restaurants[Math.floor(Math.random() * restaurants.length)];
        $('#result').text(result);
    });
    
    $('.roll3').click(function() {
        var result = [];
        while (result.length < 3){
            restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
            if (result.includes(restaurant)){
            }else{
                result.push(restaurant);
            }
        }
        $('#result').text(result[0] + " , " + result[1] + " , " +  result[2]);
    });
});