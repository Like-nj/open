'use strict'

console.log('1');
setTimeout(()=>console.log('2'), 1000);
console.log('3');


// Synchronous callback
function printTmm(print){
    print();
}
printTmm(()=> console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log("async !!"), 2000);

// Callback Hell ex
class UserStorage{
    loginUser(id, pw, onSuccess, onError){
        setTimeout(() => {
            if (
                (id ==='ellie' && pw==='dream') ||
                (id ==='coder' && pw==='academy')
            ){
                onSuccess(id);
            }else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
 
    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}    

const userStorage= new UserStorage();
const id=prompt('enter your id');
const pw=prompt('enter your password');
userStorage.loginUser(
    id, 
    pw,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!!`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);