// function outerFunction() {
//   function innerFunction() {
//     console.log("This is inner function");
//   }
//   return innerFunction;
// }

// const output = outerFunction();
// output()
// // console.log(innerFunction())



function counter (owner){
    let count = 0;
    function increment (){
count++
console.log('Value Of counter', count,owner)
    }
    return increment;
}

const rahimCounter = counter('rahim');
rahimCounter()
rahimCounter()



const korimConter = counter('karim');
korimConter()
korimConter()
korimConter()
korimConter()
// const count1 = counter();
// // console.log(count1)
// count1()
// count1()
// count1()
// count1()