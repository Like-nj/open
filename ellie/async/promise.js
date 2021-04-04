'use strict';

// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// where new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (newwork, read files)
    console.log('doing something....');
    //setTimeout(() => {}, 2000);
    setTimeout(() => { 
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {console.log(value);})
    .catch(error => {console.log(error);})
    .finally(()=> {console.log('finally');})

// 3. Promise chaining
const fetchNumer = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumer
    .then(num => num*2)
    .then(num => num*3)
    .then(num => { 
        return new Promise((resolve, reject)=> {
            setTimeout(()=> resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling

// 1. 서버 통신은 fetch API를 써요. 나중에 미니 게임할때 한번 이용해 볼꺼예요
// 2. .then(hen => getEgg(hen)) 여기 까지만 남겨 놓으시면 콘솔에 출력하는 부분이 없기떄문에 당근 아무것도 출력되지 않겠죠? 하하
// 3. chaining된 아이들은 순차적으로 진행되지만 중간중간에 서버에서 데이터를 받아오는 등 시간이 오래 걸려도 
// chaining 밖의 코드들은 정상적으로 동작하다가 나중에 chaining이 최종적으로 완료 되면 그때 등록된 .then 콜백들이 호출되어 지기 때문에 비동기라고 말해요 :)

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 알`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 프라이`), 1000);
    });    

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);
    