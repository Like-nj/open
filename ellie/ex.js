// console.log('------번외');
function add(num1, num2){
    return num1 + num2;
}
function divide(num1, num2){
    return num1 / num2;
}

// function surprise(callback){
//     const result = callback(2,4);  //divide(2,3)
//     console.log(`번외: + ${result}`);
// }

function surprise(callback){
    console.log(`번외: + ${callback(2,4)}`);
}

//function surprise () => {console.log(`번외: + ${callback(2,4)}`)};

surprise(add);

// 번외:class 
class Counter {
    constructor(run5num) {
       this.num = 0;
       this.callback = run5num;
    }
    increase(){
        this.num ++;
        console.log(this.num);
        if (this.num % 5==0) {
            this.callback && this.callback(this.num);
        }   
    }
}

function printNum(mObj) {
    console.log(`wow : ${mObj}`);
}

function alertNum(mObj) {
    alert(`wow : ${mObj}`);
}

const coolCnt = new Counter(printNum);
// coolCnt.increase();
// coolCnt.increase();
// coolCnt.increase();
// coolCnt.increase();
// coolCnt.increase();
// coolCnt.increase();