var readlineSync = require('readline-sync');

var studentsArr = [];

for (let i = 0; i < 3; i++){
  var stuName = readlineSync.question("what is your name? ");
  var unitMarks = readlineSync.question("what is your unit-test marks? ");
  var preFinalMarks = readlineSync.question("what is your pre-final marks? ");
  var finalMarks = readlineSync.question("what is your final marks? ");

  var stuInfo = {
    name: stuName,
    uMarks: unitMarks,
    preMarks: preFinalMarks,
    fMarks: finalMarks,
    totalMarks: Number(unitMarks)+Number(preFinalMarks)+ Number(finalMarks)
  }
  studentsArr.push(stuInfo);
}

var max = studentsArr[0].totalMarks;
var name = studentsArr[0].name;

for(let i=0; i < studentsArr.length; i++){
  if(studentsArr[i].totalMarks > max){
    max = studentsArr[i].totalMarks;
    name = studentsArr[i].name;
  }
}

console.log("The highest marks is of student " + name + " his marks are" + max);