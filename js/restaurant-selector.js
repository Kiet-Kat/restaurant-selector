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
    "Soho Bistro"
]

function getRestaurant(){
    return restaurants[Math.floor(Math.random() * restaurants.length)];
}

$(document).ready(function(){
    $('.roll1').click(function(){
        var result = getRestaurant();
        $('#result').text(result);
    });
    
    $('.roll3').click(function() {
        var result = [];
        while (result.length < 3){
            restaurant = getRestaurant();
            if (result.includes(restaurant)){
            }else{
                result.push(restaurant);
            }
        }
        $('#result').text(result[0] + ", " + result[1] + ", " +  result[2]);
    });

    $(".eat-out").click(function(){
        var eatOut = Math.random() >= 0.65;
        if (eatOut == true){
            $('#result').text("Eat out at " + getRestaurant());
        }else{
            $('#result').text("Eat at home");
        }
    });
});