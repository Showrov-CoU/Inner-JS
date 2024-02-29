// function addFunctionalProperty(){

// }

// const addFunctionalProperty = {
//   eat: function (name) {
//     console.log(`${name} is eating`);
//   },
//   play: function (name) {
//     console.log(`${name} is playing`);
//   },
// };

function Person(name, age) {
  //   const person = Object.create(addFunctionalProperty);
  //   const person = Object.create(Person.prototype);
  //   person.name = name;
  //   person.age = age;
  this.name = name;
  this.age = age;

  //   return person;
}

Person.prototype = {
  eat: function (name) {
    console.log(`${name} is eating`);
  },
  play: function (name) {
    console.log(`${name} is playing`);
  },
  run: function (name) {
    console.log(`${name} is running`);
  },
};

// const sakib = Person("sakib", 25);
// console.log(sakib.name);
// sakib.run("sakib");

// const tamim = Person("Tamim", 30);
// console.log(tamim.name);
// tamim.play("tamim");

const sakib = new Person("sakib", 55);
sakib.run("sakib");