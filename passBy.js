function multiply(a, b) {
  a = a - 5;
  b -= 5;
  console.log(a, b);
  return a * b;
}

let x = 10;
let y = 15;
console.log("Before Calling", x, y);
const result = multiply(x, y);
console.log(result);
console.log("After Calling", x, y);

// primitive value argument hishabe pathale and change korle main vlaue theke kichui change hoi na
