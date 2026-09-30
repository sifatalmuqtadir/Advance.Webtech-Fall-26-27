const sname = "Sifat";
let marks = [40,50,60,80,90];
marks.push(70);
function Total (marks) {
  let total = 0;
  for (let i=0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return total;
}

function Avarage (total, subNum) {
  return total/ subNum;
}

function Grade (avarage) {
  if (avarage>=85){
    console.log ("A");
  } else if (avarage>=75){
    console.log ("B");
  } else if (avarage >= 65){
    console.log ("C");
  } else if (avarage>=60){
    console.log ("D");
  }else{console.log ("F");}
}

function Result (marks) {
  for (let i=0; i<marks.length; i++){
    if (marks[i]<50) {
      console.log("Fail");
    }
  }
  console.log("Pass");
}

function findHighestMark (marks) {
  let heightst = marks [0];
  for (let i=1; i<marks.length; i++){
    if (marks[i]>heightst) {
      heightst=marks[i];
    }
  }
  console.log (heightst);
}

function countPassedSubjects(marks){
  let count = 0;
  for (let i=0; i<marks.length; i++) {
    if(marks[i]>=50){
      count++;
    }
  }
  console.log(count);
}

const total = Total(marks);
const avarage = Avarage(total, marks.length);
const grade = Grade(avarage);
const result = Result(marks);
const heightst = findHighestMark(marks);
const subPass = countPassedSubjects(marks);

console.log ("Student Name: ", sname);
console.log ("Marks: ", marks);
console.log ("Total Marks: ", total);
console.log ("Avarage: ", avarage);
console.log ("Grade: ", grade);
console.log ("Result: ", result);
console.log ("Highest Marks: ", heightst);
console.log ("Passed Student: ", subPass);