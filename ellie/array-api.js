'use strict';

// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join("','"));
  }
  
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(',',3));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse()); //array 자체를 변경
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    let a1=array.slice(2,5)
    console.log(a1) ; //3,4,5   
    console.log(array); //1,2,3,4,5 

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result= students.find(function(student, index){
        console.log(student,index);
        return student.score===90;
    });
    console.log(result);

    const result1= students.find((student) => student.score===90) ;
    console.log(result1);
    
  }
  
  // Q6. make an array of enrolled students
  {

    const resultQ6 = students.filter(function(student, index){
        return student.enrolled===true;
    });
    console.log(resultQ6);

  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const resultQ7 = students.map((student)=>student.score);
      console.log(resultQ7);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const resultQ8  = students.some((student)=>student.score<50);
      console.log(resultQ8);

      const resultQ8_1  = !students.some((student)=>student.score >= 50);
      console.log(resultQ8_1);
  } 
  
  // Q9. compute students' average score
  {
      console.clear;
      const resultQ9= students.reduce((preStudent, currStudent)=> {
        console.log('----------');
        console.log(preStudent);
        console.log(currStudent);
        return preStudent+currStudent.score; 
        
      },0);
      console.log(resultQ9/students.length);

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result_Q10 = students
        .map((student)=>student.score)
        .filter((score)=> score > 50)
        .join();
      console.log(result_Q10);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result_Q11 = students
        .map((student)=>student.score)
        .sort((a, b) => a-b)
        .join();
    console.log(result_Q11);
  }