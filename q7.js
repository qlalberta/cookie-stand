//create constructor function
function Dog (name, breed, leg) {
this.name = name;
this.breed = breed;
this.legs = 4;
isAGoodDog = true;
}

//create prototype method
var bark;
Dog.prototype.says = function (bark) {
  console.log(bark);
}

//create two new objects
parker = new Dog ('Parker', 'English Shepherd',4);
demi = new Dog('Demi', 'Border Collie', 4)

//have parker say bark
var i = 'woof';
parker.says(i);
demi.legs = 3;

//test
console.log(demi);
