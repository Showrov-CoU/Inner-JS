//! this keyword helps the reuse of function in differnt context
//! 4 rules to understand this keyword which are

//? 2. explicit binding
//? 3. new binding
//? 4. window binding

//? 1. implicit binding
//* 1st
var Sakib = {
    name:'sakib',
    age:25,
    playerName: function(){
        console.log(this.name);
    }
}
Sakib.playerName();

//* 2nd
var addPlayerFunc = (obj) => {
  obj.playername = function () {
    console.log(this.name);
  };
};

var Musi = {
  name: "Musfiq",
  age: 25,
};
var Mah = {
  name: "Mahmudullah",
  age: 25,
};

addPlayerFunc(Musi);
addPlayerFunc(Mah);

Musi.playername();
Mah.playername();


//* 3rd
var Person = function (name, age) {
  return {
    name,
    age,
    playerName: function () {
      console.log(this.name);
    },
    father: {
      name: "Aftab Sakib",
      fatherName: function () {
        console.log(this.name);
      },
    },
  };
};

var sakib = Person("Sakib", 25);
sakib.playerName();
sakib.father.fatherName();
