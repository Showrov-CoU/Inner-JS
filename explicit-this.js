var playerName = function (v1, v2, v3) {
  console.log(`${this.name} is an ${v1},${v2} and ${v3}`);
};

var Sakib = {
  name: "sakib",
  age: 25,
};
const virtue1 = "handsome";
const virtue2 = "all-rounder";
const virtue3 = "best player";

playerName.call(Sakib, virtue1, virtue2, virtue3); // take first parameter as an object & this point the object. call can take unlimited parameter after passing object

//! we can pass extra parameter as an array.then we want to use playerName.apply(Sakib, virtue)
const virtue = [virtue1, virtue2, virtue3];
playerName.apply(Sakib, virtue);

//! .bind() is same of the .call() but bind() return a new instance of the function
const newFunc = playerName.bind(Sakib, virtue1, virtue2, virtue3);
console.log(newFunc);
