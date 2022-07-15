let name1 = {

    FirstName:"Neeraj" ,
    LastName: "Ghildiyal"
} 

let printFullName = function(){

    console.log(this.FirstName + " "+ this.LastName) 
    
    }


let printmyName = printFullName.bind(name1);

printmyName();

// We need to write our Implementation on the bind method 
// whenever we write any function in Funtion.prototype then that function is accessible to 
// every other function 

Function.prototype.mybind = function(...args){

    // return a function because bind method keep the function which can later be invoked
    // to get the print name function inside return function(){    }  we need 'this' variable
    // which can point to the printmyName function
    
    // args is an array and we are slicing the first element and puuting rest of the elements 
    // in params and passing it in the apply method because we know how bind methods works 
    // and sometimes it also takes multiple arguments which also needs to be taken care of 

    let obj = this, params  =args.slice(1)

    return function(...args2){
    obj.apply(args[0], [...params , ...args2])
    
    }
}


let printmyName2 = printFullName.mybind(name1)
printmyName2(); // this should work like the bind method and should print the full name 

