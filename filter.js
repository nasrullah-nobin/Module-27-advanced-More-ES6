const num = [1, 2, 4, 6, 43, 2, 7];
const evenNumber = num.filter((n) => n % 2 === 0);
// console.log(evenNumber);

const friend = ["Nahid", "Rohim", "Korim", "Rohmt"];
const firstletterN = friend.filter((n) => n.toLowerCase()[0] === "r");
// console.log(firstletterN);

const student = [
  { name: "razim", age: 44 },
  { name: "rohim", age: 34 },
  { name: "Azim", age: 24 },
  { name: "korim", age: 14 },
  { name: "rohmot", age: 54 },
];
const bigAge = student.filter((a) => a.age > 30 && a.name[0].toLowerCase()=== 'r');
// console.log(bigAge);


for(const stu of student){
   if(stu.name.startsWith('r')){
    console.log(stu)
   }
}

const sumofNum = num.reduce((acc,s)=> s+acc ,0);
console.log(sumofNum)