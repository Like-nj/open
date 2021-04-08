'use strict';
// class: template
// object: instance of a class

// Object
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


// Computed properties
const ellie={name:'njkang', age:20};
console.log(ellie);
console.log(ellie.name); // == console.log(ellie['name']);
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

const person1 = new Person('elile', 30);
//Constructor function
function Person(name, age){
    // this ={};
    this.name=name;
    this.age=age;
    // return this;
}
console.log('name' in ellie);    //true
console.log('njkang' in ellie); //false

// for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(let value of array){
    console.log(value);
}

// fun cloning
const user = {name:'ellie', age: '20'};
const user2 = user;
user2.name ='coder';
console.log(user);  //{name:'coder', age: '20'};

// old way
const user3={};
for (let key in user){
    user3[key]=user[key];
}
console.clear();
console.log(user3);

const user4={};
Object.assign(user4, user);
console.log(user4);

const user5=Object.assign({}, user);
console.log(user5);