
// function x(){

//     let a = 10;

//     function y(){

//         console.log(a);
//     }

//     return y;
// }


// const b = x();

// // console.log(b);
// console.log(b()); 


// document.querySelector('#granparent').addEventListener('click', ()=>{

//     console.log('Grand Parent Clicked!!!!')
// }, true)

// document.querySelector('#parent').addEventListener('click', ()=>{

//     console.log('Parent Clicked!!!!')
// }, true)

// document.querySelector('#child').addEventListener('click', ()=>{

//     console.log('Child Clicked!!!!')
// }, true)


// --------------THe Above Code is for event bubbling practice ---------------------------------------

//------------------clearTimeOut function usage-------------------------------------------------------

// let clear = setTimeout(myFunction, 5000);

// function myFunction(){

// document.querySelector('#para').innerHTML = 'Hello Text is changed sucessfully!!!!!' 

// }

// document.querySelector('#btn').addEventListener('click',(e)=>{


//     clearTimeout(clear);

// })


// let p = setInterval(repeatFunction, 2000)

// function repeatFunction(){

//     document.querySelector('#para').innerHTML += 'Repeat function!!' 
// }

// document.querySelector('#btn').addEventListener('click',(e)=> {

//     // The quick brown fox is jump over the lazy Dog  
//     clearTimeout(p);

// })



// document.querySelector('#para').addEventListener('click', (e)=>{

// const paragraph = document.querySelector('#para');

// paragraph.style.color = 'blue'


// })

// ******************************Adding two numbers using HTML and Javascript ****************************

// document.querySelector('#btn1').addEventListener('click', (e)=>{
    
// let sq = document.querySelector('#Enter').value

// console.log('This is sq', sq)

// sq = sq * sq;  

// console.log(sq);  

// document.querySelector('#Enter').value = sq; 

// })




// const NewElement = document.createElement('p')


// NewElement.innerHTML = 'This is real manupulation of DOM!!'


// const Parent = document.querySelector('.container')


// // Parent.appendChild(NewElement);

// // Parent.after(NewElement)

// Parent.before(NewElement);


// *************************Map and filter function basic usage *******************************************

// const a = [12,34,11,66,7]

// const b= a.map(x => {

//     return (x * x)
// })

// console.log(b); 

// const c = a.filter(x => {

// if(x%2 === 0)

// return x; 
// }) 

// console.log(c); 






// ***********************  USage of Map function on Array of objects *********************************




// const obj = [
//     {
//     name1: 'Neeraj',
//     Age: 27
//     },

//     {
//     name1: 'Neerja',
//     Age: 19
//     },

//     {
//     name1: 'Sanju',
//     Age: 21
//     },

//     {
//     name1: 'Rahul',
//     Age: 11
//     },

//     {
//     name1: 'Suraj',
//     Age: 31
//     },

//     {
//     name1: 'Sonu',
//     Age: 22
//     },
                        
// ]

// const modifiedObj = obj.map((x) => {return `Name: ${x.name1}, Updated Age is : ${x.Age + 1}`})

// console.log(modifiedObj);



// One of the really commons use cases for the map() function on the front-end is to wrap data in HTML:


let cont = document.querySelector('#container');
  
let users = [
    { firstName : "John", lastName: "Doe", age: 17 },
    { firstName : "Stephen", lastName: "Matt", age: 16 },
    { firstName : "Abigail", lastName: "Susu", age: 15 }
];
  
let singleUser = users.map((user)=>{
    // Let's add the firstname and lastname together
    let fullName = user.firstName + ' ' + user.lastName;
    return `
      <h3>${fullName}</h3>
      <p>${user.age}</p>
    `
});

cont.innerHTML = singleUser;
