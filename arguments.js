function add(num1, num2) {
  console.log("arguments:", arguments,arguments[2]);
  const args = [...arguments];
  console.log(args)
  return num1 + num2;
}
add(5,2,6,5,3,2)