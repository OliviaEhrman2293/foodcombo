var food = ["ice cream", "pizza", "spaghetti", "PB & J", "tacos", "sushi","pasta", "sub"]
var drinks = ["coca-cola", "sprite", "chocolate milkshake", "tea", "coffee","hot cocoa", "iced coffee"]

function pickFood(){
  var randomDecimal = Math.random();
  var random = randomDecimal*food.length;
  var final = Math.floor(random);
  return food[final];
}

console.log(pickFood());

function pickDrink(){
  var randomDecimal = Math.random();
  var random = randomDecimal*drinks.length;
  var final = Math.floor(random);
  return drinks[final];
}

console.log(pickDrink());

var button = $('button');
var message = $('.message');

button.on("click", getFoodAndDrink);

function getFoodAndDrink(){
  var foodinput = pickFood();
  var drinkinput = pickDrink();
  message.text(`${foodinput} and ${drinkinput}`);
  console.log(`${foodinput} and ${drinkinput}`);
}
