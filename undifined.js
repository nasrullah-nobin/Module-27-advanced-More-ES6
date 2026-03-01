let num;
// console.log(typeof num);

const sum = (a, b) => {
  console.log(a, b);
};
sum();
sum(1);

const student = {
  name: "tormuj",
  age: 30,
};
delete student.name;
console.log(student.name);
console.log(student.marks);

const number = [1, 3, 4, 5];
delete number[1];
console.log(number);
console.log(number[1]);


console.log(typeof undefined)
console.log(typeof null) // this is js bug