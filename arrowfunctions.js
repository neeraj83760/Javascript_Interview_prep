//*******************************************Arrow Vs  Normal Functions !!**************************************************** */

// function abc(){

//     let b= this
//     console.log(b);
// }

// abc(); // Refers to the window object 


//****************************************************************************************************** */


// let ab = ()=>{

//     let b = this
//     console.log(b)
// }

// ab(); // this will point to the window object 


// let a = {

//     name1: "Neeraj",


//     c : function(){

//     console.log(this.name1); // this will point to the object 'a' 

//     }
// }

// a.c();


// let b = {

//     name1: "Neeraj",

//     d : ()=>{

//         console.log(this.name1)
//     }
// }


// b.d(); // this will point to the window object 



//********************************************************************************************** */


// let obj1 = {

//     name1: "Neeraj",
     
//     // getName(){
    

//     childObj: {

//         newName: 'Swati Kumari',

//     getName(){
//     console.log(this.newName + "  " + this.name1); // this is the normal function which points to the
//     // immediate parent which is childObj not to it's parent's parent which is obj1... so the output
//     // we'll get is :

//     // Swati Kumari undefined 
//     }         

//     }
// }

// obj1.childObj.getName(); // Output will be :  Swati Kumari undefined 



//**************************************************************************************************** */

// let obj1 = {

//     name1: "Neeraj",
     
//     // getName(){
    

//     childObj: {

//         newName: 'Swati Kumari',

//     getName: () => {
//     console.log(this.newName + "  " + this.name1); // this is the normal function which points to the
//     // immediate parent which is childObj not to it's parent's parent which is obj1... so the output
//     // we'll get is :

//     // Swati Kumari undefined 
//     }         

//     }
// }

// obj1.childObj.getName();


//********************************************************************************************* */

// let obj1 = {

//     name1: "Neeraj",
         
//     getName(){

//     let arrfunc = ()=>{ console.log(this.name1);  }
//     arrfunc();    
    
//     }         

    
// }

// obj1.getName(); // output will be neeraj



//***********************Lets See How  this works in a constructor ********************************* */

// class User{

//     constructor(name){

//     this.name = name
//     }


//     getName(){

//         console.log(this.name);
//     }
// }

// const user = new User('Neeraj');


// console.log(user)

// user.getName()


//*********************************Interview Questions on 'this' Keyword ********************************************* */

// const user = {

// firstName: 'Yogesh',
// getName(){

//     const firstName = 'Sanjay';
//     return this.firstName;
// }    

// };

// console.log(user.getName()); // the Output will be Piyush


// *******************************Second Interview question **********************************************

// function makeUser(){

//     return{

//     name:"John",
//     ref: this,

//     };
// }

// let user = makeUser();

// console.log(user.ref.name);// what will be the output ... nothing 

// console.log(user) // the output will be :  {name: 'John', ref: Window}


// **************** The challenging part in the above code is how we can modify the code so that
// it can point to john 


// function makeUser(){

// return {

// name: "YoYo",
// ref(){

// return this;

// }

// }
// }

// let user = makeUser()

// console.log(user.ref().name); // Output will be 'YoYo'




// ******************************Another Interview Problem ********************************************

// const user = {

//     name: "Piyush Aggrawal",
//     logMessage(){

//     console.log(this.name); // what is logged?

//     },
// };

//setTimeout(user.logMessage , 1000) // the setTimeout logmessage not as a normal function it will take it 
// as a callback function and print nothing 

// the complete method will be copied inside the settimeOut function and it will have no longer access
// to user object ... so it means logMessage method will work independently and which is now have a 
// refrecnce to the window object and window object has nothing which is called as 
// name property which he can point out 


// Again how we can modify the code so that it can work and point to the "name" in the user Object 
// first we need to avoid calling the 'logMessage' as a callback
// now the 


// setTimeout(() => {

// user.logMessage(); // now this will be invoked as a method of the 'UserOjbect'     
    
// }, 1000);



// ****************************************Another Interview question **********************************


// const user = {

// name:"Neeraj",

// greet(){

//     return `Hello, ${this.name}`; // in normal function this will point to it parent
//     // object 
// },

// farewell: ()=> {

//     return `Goodbye, ${this.name}`; // this in the arrow function will point to the parent function 
//     // but we don't have a prarent function of a 'Farewell' function so it will point to the 
//     // window object 

// }

// };

// console.log(user.greet());
// console.log(user.farewell()); 



// *************************Interview Question : Create an Object Calculator as follows ***********************

// let calculator = {

//     read(){

//         this.a = +prompt("a = ", 0); // adding a '+' sign so that the value which we are entering
//         will be considered as integer 
//         this.b = +prompt("b = ", 0);  
//     },
     
//     sum(){

//     return this.a + this.b;

//     },

//     mul(){

//     return this.a * this.b;     

//     }
// }

// calculator.read(); // it will read two values from the User 
// console.log(calculator.sum());
// console.log(calculator.mul());



//*********************************Another Interview Question ******************************************************************** */

var length = 4;

function callback(){

    console.log(this.length);
}

const object = {

    length:5, 
    method(){
        
        console.log(arguments);
        arguments[0](); 
    },


}

object.method(callback, 2, 3); 














