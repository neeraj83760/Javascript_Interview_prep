// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code


let myPromise = new Promise((resolve, reject)=>{

let x = 0;     
setTimeout((x) => {
    
x= 3; 

if(x ===3 )
resolve('Value sucessfully updated!!!!');
else
reject("Unable to update the x value it's still 0");

console.log(x)


}, 5000);

console.log(x)

})

// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.

myPromise.then((sucess)=>{myDisplayer(sucess);}, 
(failure)=>{myDisplayer(failure);})


function myDisplayer(some){

    document.querySelector('.para').innerHTML = some; 
}

