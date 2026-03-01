const pi = 3.14;
function add(a, b) {
  const factor = 0.5;
  const total = (a + b) * factor + pi;
  return total + doubleIt(5) + addTwo(3);
  function addTwo (num){
    //addTwo function ke outside declare kora jabe na
return num + 2
  }
}


function doubleIt (num){
    return num* 2;
}
// console.log(factor)