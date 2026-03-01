const numbers = [1, 2, 3, 4, 5, 6, 7];

// const doubled = [];
// for (const num of numbers) {
//   doubled.push(num * 2);
// }
// console.log(doubled);

// const doubleIt = num => num*2;
// const doubled = numbers.map(doubleIt)
const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

const square = numbers.map((p) => p * p);
// console.log(square);

const friend = ["amin", "rojob", "mollick"];
const firstLetter = friend.map((f) => f[0]);
// console.log(firstLetter);

const product = [
  { brand: "samsung", price: 40000 },
  { brand: "oppo", price: 50000 },
  { brand: "maximum", price: 60000 },
  { brand: "Symphony", price: 70000 },
];
const proPrice = product.map((p) => p.price * 2);
// console.log(proPrice);
const name = product.map((pr) => {
  return { Brand: pr.brand.toUpperCase(), price: pr.price };
});
console.log(name);
