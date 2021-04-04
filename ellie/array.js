'use strict';

const arr1 =new Array();
const arr2= [1,2];

// 🍎🍌🍓🍏🥥🍉🍐🍋🍑🍒🥝
const fruits=['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);

console.clear();

for (let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function() {
    console.log('he');
});

fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
});

console.clear();
fruits.forEach((fruit) =>console.log(fruit));
;

fruits.push('🍋','🍏');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('🍒','🥝');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1,'🍐','🍋','🍑');
console.log(fruits);

const fruits2 =['a'];
const newF = fruits.concat(fruits2);
console.log(newF);

console.log(fruits);
console.log(fruits.indexOf('a'));
console.log(fruits.indexOf('🍑'));
console.log(fruits.includes('🍑'));
console.log(fruits);
console.log(fruits.push('🍑'));
console.log(fruits.lastIndexOf('🍑'));
