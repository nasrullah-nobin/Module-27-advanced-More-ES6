function firstSum (arr1,arr2){
    arr1[0]= 100;
    arr2[0]= 200;
    const first = arr1[0];
    const second = arr2[0];
    return first + second;
}

const num1 = [5,10,15,20];
const num2 = [30,40,50];
console.log('Before The Function Call', num1,num2);
 const result = firstSum(num1,num2);
 console.log(result);
 console.log('After The Function Call', num1,num2)

 // object ba array ke bola hoi pass by reference and primitive data type ke bola hoi passBy Value;