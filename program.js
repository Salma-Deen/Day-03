// 1)Print odd numbers in an Array
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

// B)Arrow Function
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


  // C)IIFE

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


// 2)Convert all the strings to title caps in a string array
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

// B)Arrow Function
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

// C)IIFE

var str = (function (str1) {
  str1 = userInput[0].toLowerCase().split(' ');
 for (var i = 0; i < str1.length; i++) {
   str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
 }
 console.log(str1.join(" "));
})();
// INPUT:have a nice day
// OUTPUT:Have A Nice Day

// 3)Sum of all numbers in an Array
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

// B)Arrow Function

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

// C)IIFE
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

//4)Return all prime numbers in an array
// A)Anonymous function
// B)Arrow Function
// C)IIFE



// 5)Return all palindromes in an array
// A)Anonymous function
// B)Arrow Function
// C)IIFE



// 6)Return Median of two sorted array of the same size
// A)Anonymous function
var med=function(a1,a2)
{
var a3=a1.concat(a2);
var c=a1[a1.length-1];
var d=a2[0];
let sum=(c+d)/2;
return sum;
}
var a1=userInput[0].split("").map(Number);
var a2=userInput[1].split("").map(Number);
console.log(med(a1,a2));

// INPUT:a1[12345] a2[56789]
// OUTPUT:5

// B)IIFE Function
var med=(function(a1,a2)
{
   a1=userInput[0].split("").map(Number);
 a2=userInput[1].split("").map(Number);
var a3=a1.concat(a2);
var c=a1[a1.length-1];
var d=a2[0];
let sum=(c+d)/2;

console.log(sum);
})();

// INPUT:a1[12345] a2[56789]
// OUTPUT:5

// 7)Remove Duplicates from an array
// A)Anonymous function



// B)IIFE Function


// 8)Rotate an array by k times
// A)Anonymous function
// B)IIFE Function
