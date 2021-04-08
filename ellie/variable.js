'use strict';
/*  Variable
    Mutable type : let
    Immutable type : const
*/

// var (don't ever use this!)
// var hoisting (move declaration from botton to top  ) => let
age =4;
var age;
console.log(age);

// let (added in ES6)
let globalName = 'global name';
{
    let name ='ellie';
    console.log(name);
    name ='hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// constants (favor immutable data type always for a few reasons)
const daysInWeek =7;
console.log(`value: ${daysInWeek}, type: ${typeof daysInWeek}`);

// symbol, create unique indentifiers for objects
const Symbo11 = Symbol('id');
const symbol2 = Symbol('id');
console.log(Symbo11===symbol2); //false
console.log(`value: ${Symbo11.description}, type: ${typeof Symbo11}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age:20};
console.log(ellie);

// 연산자
const value1= true;
const value2= false;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i=0; i<10;i++){
        console.log('&^^&');
    }
    return true;
}


//Equality
const stringFive ='5';
const numberFive =5;

// == loose equality, with type conversion
console.log(stringFive==numberFive);    //true
console.log(stringFive!=numberFive);   //false

// == strict equality, no type conversion
console.log(stringFive===numberFive);    //false
console.log(stringFive!==numberFive);   //true

//object equality by reference
const ellie1={name: 'ellie'};
const ellie2={name: 'ellie'};
const ellie3=ellie1;
console.log('object equality by reference'); 
console.log(ellie1==ellie2); //false
console.log(ellie1===ellie2); //false
console.log(ellie1===ellie3); //true

// equality = puzzler
/*  false: 0, -0, '', null, undefined
    true : -1, 'hello', 'false'
*/
console.log('equality = puzzler'); 
console.log(0==false); //true
console.log(0===false); //false
console.log(''==false); //true!!
console.log(''===false); //false
console.log(null==undefined); //true
console.log(null===undefined); //false


// bad
function upgradeUser(usr){
    if (usr.point > 10){
        // long upgrade logic...
    }
}
// good
function upgradeUser(usr){
    if (usr.point <= 10){
        return;
    }
    // long upgrade logic...
}

console.log('random Quiz');
function randomQuiz(answer, printY, PrintN){
    if (answer==='love you') {
        printY();
    }else {
        PrintN();
    }
}
//anonymous function
const printY = function() {
    console.log('Yes');
}
// named function
const printN = function print() {
    console.log('No');
}  
randomQuiz('I dddd',printY, printN);
randomQuiz('love you',printY, printN);

// Arrow function
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simMultiply = (a,b) => {
    return a*b;
}

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

/*  Quiz!!
    fun calculate(command, a, b)
    command : add, subtract, divide, multiply, remainder
*/

function calculate(command, a, b){
    switch (command) {
        case 'add' :
            return a+b;
        case 'subtract' :
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
           // throw new Error('unknown command');
     }
}

console.log(calculate('add', 10,5));
console.log(calculate('subtract', 10,5));
console.log(calculate('divide', 10,5));
console.log(calculate('multiply', 10,5));
console.log(calculate('rdddd', 10,5));


// function : 이해편
console.log('function : 이해편');
function fadd(num1, num2){
    return num1 +num2;
}

function fdivide(num1, num2){
    return num1/num2
}

function surprise(callback){
    const result = callback(5,10);
    console.log(result);
}


surprise(fdivide);

