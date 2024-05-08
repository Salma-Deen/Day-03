// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array

// A)Anonymous function
var box = []
var a = function (arr) {
 for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
   box.push(arr[i]);
  }
  }
return box;
}
var arr = userInput[0].split("").map(Number)
console.log(a(arr))
// INPUT:1234567
// OUTPUT:[1,3,5,7]

// B)IIFE

 (function (arr) {
 arr = userInput[0].split("").map(Number)
 let box = [];
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] % 2 != 0) {
    box.push(arr[i]);
    }
   }
  console.log(box)
  })();
// INPUT:235789
// OUTPUT:[3,5,7,9]

---------------***********************----------------------**********************

  // b. Convert all the strings to title caps in a string array

// A)Anonymous function
var str = function (str1) {
  for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
  }
  return str1.join(" ");
}
var str1 = userInput[0].toLowerCase().split(' ');
console.log(str(str1))
// INPUT:have a nice day
// OUTPUT:Have A Nice Day

// B)IIFE

var str = (function (str1) {
  str1 = userInput[0].toLowerCase().split(' ');
 for (var i = 0; i < str1.length; i++) {
   str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
 }
 console.log(str1.join(" "));
})();
// INPUT:have a nice day
// OUTPUT:Have A Nice Day

---------------***********************----------------------**********************

  // c.Sum of all numbers in an array

// A)Anonymous function
let sum = 0;
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
var arr = userInput[0].split("").map(Number)
console.log(a(arr))
// INPUT:12345
// OUTPUT:15

// B)IIFE
var a = (function (arr) {
  arr = userInput[0].split("").map(Number);
 let sum = 0;
 for (var i = 0; i < arr.length; i++) {
   sum = sum + arr[i];
 }
 console.log(sum);
})();
// INPUT:12345
// OUTPUT:15

---------------***********************----------------------**********************

  // d.Return all the prime numbers in an array

// A)Anonymous function
var temp = [];
var isPrime = function (a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
    return true;
  }
  for (var i = 0; i < a.length; i++) {
    if (isPrime(a[i])) {
      temp.push(a[i]);
    }
  }
}
var a = userInput[0].split("").map(Number)
isPrime(a)
console.log(temp);

// INPUT:34567
// OUTPUT:[ 3, 5, 7 ]   

// B)IIFE

let arr = userInput[0].split("").map(Number);
let temp = [];
var a = (function (arr) {
  arr = arr.filter((num) => {
    for (var i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 1) {
        temp.push(num);
      }
    }
    return temp;
  });
  console.log(temp);
})(arr);
 
//INPUT:4567 
// OUTPUT:[5,7]

  
---------------***********************----------------------**********************
// e.Return all the palindromes in an array

  // A)Anonymous function
let a=userInput[0];
let arr=a.split("").reverse();
  let temp=[];
const palin=function(arr)
{    
    let reversed=[];
    for(let i=0;i<arr.length;i++)
  {
  if(a[i]===arr[i])
  {
   temp.push(a[i]);
  }
  }
   return temp;
  }      
 palin(arr)
console.log(temp.map(Number));

// In this program the userInput is taken as an array, as in GUVI the input 
// box is string in default we have to convert it in array so I have taken that as an array.
// INPUT:123        INPUT:5667
// OUTPUT:[2]     OUTPUT:[ 6, 6 ]

// B)IIFE

let a=userInput[0];
let arr=a.split("").reverse();
  let temp=[];
const palin=(function(arr)
{    
    let reversed=[];
    for(let i=0;i<arr.length;i++)
  {
  if(a[i]===arr[i])
  {
   temp.push(a[i]);
  }
  }
   console.log(temp.map(Number));
  })(arr); 

  //  INPUT:123        INPUT:5667
  // OUTPUT:[2]     OUTPUT:[ 6, 6 ]

---------------***********************----------------------**********************

// f.Return median of two sorted arrays of the same size.

// A)Anonymous function
var med = function (a1, a2) {
  var a3 = a1.concat(a2);
  var c = a1[a1.length - 1];
  var d = a2[0];
  let sum = (c + d) / 2;
  return sum;
}
var a1 = userInput[0].split("").map(Number);
var a2 = userInput[1].split("").map(Number);
console.log(med(a1, a2));

// INPUT:a1[12345] a2[56789]
// OUTPUT:5

// B)IIFE Function

a1 = userInput[0].split("").map(Number);
a2 = userInput[1].split("").map(Number);
var med = (function (a1, a2) {

  var a3 = a1.concat(a2);
  var c = a1[a1.length - 1];
  var d = a2[0];
  let sum = (c + d) / 2;

  console.log(sum);
})(a1, a2);

// INPUT:a1[12345] a2[56789]
// OUTPUT:5

---------------***********************----------------------**********************
// g.Remove duplicates from an array
// A)Anonymous function

let arr=userInput[0].split("").map(Number)
var dup=function(arr)
{
  return [...new Set(arr)];
}
  console.log(dup(arr))
// INPUT:234567234
// OUTPUT:[ 2, 3, 4, 5, 6, 7 ]

// B)IIFE Function

var arr=userInput[0].split("").map(Number)
var dup=(function(arr)
{
  let a= [...new Set(arr)];
  console.log(a)
})(arr);
// INPUT:234567234
// OUTPUT:[ 2, 3, 4, 5, 6, 7 ]

---------------***********************----------------------**********************
 // h.Rotate an array by k times

 // A)Anonymous function
var rotate = function (arr, k) {
  for (let i = 0; i < k; i++) {
    var p = arr.pop();
    arr.unshift(p);
  }
  return arr
}
var arr = userInput[0].split("").map(Number);
var k = userInput[1];
console.log(rotate(arr, k))
//  INPUT:12345
//         2
// OUTPUT:[ 4, 5, 1, 2, 3 ]

// B)IIFE Function
var arr = userInput[0].split("").map(Number);
var k = userInput[1];
var rotate = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    var p = arr.pop();
    arr.unshift(p);
  }
  console.log(arr);
})(arr, k);
//  INPUT:12345
//         2
// OUTPUT:[ 4, 5, 1, 2, 3 ]

---------------***********************----------------------**********************
---------------***********************----------------------**********************
---------------***********************----------------------**********************
  
  // 2.Do the below programs in arrow functions
// a.Print odd numbers in an array
//  A)Arrow Function
var box = []
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      box.push(arr[i]);
    }
  }
  return box;
}
var arr = userInput[0].split("").map(Number)
console.log(a(arr))
  // INPUT:1234567
  // OUTPUT:[1,3,5,7]

*******************************************************************
 // b.Convert all the strings to title caps in a string array


// A)Arrow Function
var str = (str1) => {
  for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
  }
  return str1.join(" ");
}
var str1 = userInput[0].toLowerCase().split(' ');
console.log(str(str1))
// INPUT:have a nice day
// OUTPUT:Have A Nice Day

*******************************************************************
// c.Sum of all numbers in an Array
// A)Arrow Function
var a = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
var arr = userInput[0].split("").map(Number)
console.log(a([1, 2, 3, 4, 5]))
// INPUT:12345
// OUTPUT:15

  ***************************************************************
//d.Return all prime numbers in an array
// A)Arrow Function

let temp=[];
const isPrime=(a)=>
{
    for(let i=2;i<a;i++)
  {
    if(a%i===0)
    {
      return false;
    }
    return true;
  }
  for(var i=0;i<a.length;i++)
{
  if(isPrime(a[i]))
  {
    temp.push(a[i]);
}}}
     var a=userInput[0].split("").map(Number)
      isPrime(a)
     console.log(temp);

// INPUT:34567
// OUTPUT:[ 3, 5, 7 ]   

*************************************************************8
//e.Return all palindromes in an array
// A)Arrow Function

let a=userInput[0];
let arr=a.split("").reverse();
  let temp=[];
const palin=(arr)=>
{    
    let reversed=[];
    for(let i=0;i<arr.length;i++)
  {
  if(a[i]===arr[i])
  {
   temp.push(a[i]);
  }
  }
   return temp;
  }     
 palin(arr)
console.log(temp.map(Number));

// In this program the userInput is taken as an array, as in GUVI the input 
// box is string in default we have to convert it in array so I have taken that as an array.
// INPUT:123        INPUT:5667
// OUTPUT:[2]     OUTPUT:[ 6, 6 ]


