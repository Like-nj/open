'use strict'

// 1. Object to JSON

let json = JSON.stringify(['a','b', 'c']);
console.log(json);

const rabbit ={
    name : 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    //return value;
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
//console.clear();
json = JSON.stringify(rabbit); 
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); //err : 함수가 미포함됨. json = JSON.stringify(rabbit); 
console.log(rabbit.birthDate.getDate()); 
console.log(obj.birthDate); //string type

// 형변환
const obj_1 = JSON.parse(json, (key, value) => {
    return key==='birthDate'? new Date(value) : value;
});
console.log(obj_1.birthDate.getDate());