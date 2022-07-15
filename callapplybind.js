// Each and every function in javascript has an access to this keyword 

let name1 = {

    firstName:"Neeraj",
    lastName:"Ghildiyal",

    // printFullName: function(){

    //     console.log(this.firstName + " "+ this.lastName) 
    // }
}


// name1.printFullName();

let name2 = {

    firstName:"Sanjay",
    lastName:"Raut",
}

// ab agar humein sanjay raut ka fullname print karana hai to we have two options 
// either copy the function from the name object and paste it in the name2 object 
// or use karlo inbulit method jo ki hai 'call' method which is also called
// function borrowing 

// VVVVVIMP : Each and every method in javascript has an access to call apply and bind methods 

// In the call function first argument will be the refrence means what we want 'this' should be
// pointing to means this should be pointing to name2 object 

// name1.printFullName.call(name2) // it will give the output 'Sanjay Raut'

// But In general we don't keep the function inside the object rather we keep it seprately 
// and whenever required we can borrow and use it using call function 

let printFullName = function(homeTown, state){

console.log(this.firstName + " "+ this.lastName +" "+ homeTown +" "+ state) 

}


// Once u keep the function seprately than we can use it like the line of code mentioned below

// printFullName.apply(name1)


// Suppose we want to pass the argument in the printFullName function, then we can do it
// by passing the second argument in the call function 

printFullName.call(name1, 'Dehradun', 'Uttrakhand')


// VVVVVVVMIP :  Only diffrence between call and apply is the way we pass the arguments 

printFullName.apply(name1, ['Dehradun', 'Uttrakhand'])


// Diffrence between call and bind method is instead of calling a function directly like 
// call method the bind methods binds the method an return the copy of that function which
// can be invoked later 

let printmyName = printFullName.bind(name1, 'Dehradun', 'Uttrakhand')

console.log(printmyName)

// we can invoke it like a normal method

// printmyName();
