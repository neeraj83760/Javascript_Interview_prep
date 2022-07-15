/*
Currying is the technique of converting a function that takes multiple arguments into a sequence of functions 
that each take a single argument. In other words, currying is just the transformation of a function that takes
multiple arguments into a sequence of nested functions that take a single argument

Currying means that the closure does not have to receive all of its arguments at once, but separately. 
I've found this useful metaphor around the internet: Think of currying as adding ingredients 
(arguments, or other spices) to a function one by one. You can drop some arguments now, and other 
arguments as you go.

There are several reasons why currying is ideal:

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
This could be personal preference, but I love that it makes my code readable

*/ 


// Function Currying using closures 

// let multiply = function(x){

//     return function(y){
 
//      console.log(x * y); 
//     }
//  }
 
//  let multiplybyTwo = multiply(2); 

// multiplybyTwo(3);


//********************** Function Currying without closures ************************************

let multiply = function(x,y){

    return (x * y); 
}

let multiplybyTwo = multiply.bind(this, 2); 

let resultantMul = multiplybyTwo(6);

console.log(resultantMul)

