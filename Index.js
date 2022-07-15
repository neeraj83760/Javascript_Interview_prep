// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// When a web page is loaded, the browser creates a Document Object Model of the page.
//The HTML DOM model is constructed as a tree of Objects.

// When u start trying to manipulate the DOM u need javascript 
// Also HTML DOM defines HTML element as Objects 


// Either u have to write this inside the window onload function or u need to 
// load the added script tag in HTML file in the last of the body element  

// window.onload = function(){

    // document.getElementById("para").innerHTML = "We have changed the paragraph element";
     

// }


// document.getElementsByClassName("para2").innerHTML = "We have changed the paragraph element";



// document.getElementsByTagName("h2")[0].innerHTML = "We have changed the paragraph element";



// For get element by TagName u also need to write the index as well 


// document.getElementsByTagName('p')[0].innerHTML = "First Paragraph tag has been changed"


// document.getElementsByTagName('p')[1].innerHTML = "Second Paragraph tag has been changed"


// const element = document.getElementsByTagName('p');

// console.log(element[0])

// const element1 = document.getElementsByTagName('h2');

// console.log(element1)


// ************************** QuerySelector === Css Selectors *****************************************

// const element = document.querySelectorAll('p');

// console.log(element)



//************** The Above methods(getElementbyID, Class or TagName) ae used for finding HTML elements ******************* */


// ***************DOM Traversing ********************************

// The below code will tell the parent of any node 

// const heading = document.querySelector('p')

// const parent = heading.parentNode;

// console.log(parent)


//****************************Finding chindren Nodes********************************* */

// const heading = document.querySelector('div')

// const child = heading.childNodes;

// console.log(child)


//*************************nextElementSbling****************************** */

// const heading = document.querySelector('#para')

// const sibling = heading.nextElementSibling;

// console.log(sibling) 

//************************PreviousElementSibling*********************************/

// const heading = document.querySelector('.para2')

// const psibling = heading.previousElementSibling

// console.log(psibling)




// *****************************DOM Manipulation *****************************************

const heading = document.querySelector('h2')

heading.innerHTML = 'We have changed the Web Page Heading !!!!'

heading.style.color = 'blue'

heading.style.fontSize = '20px'

// The below line of code is used to add a class on the particualr element`
heading.classList.add('title')

// heading.classList.remove('title') // this will remove the added class on the element 

// document.getElementsByClassName('title')[0].innerHTML = 'Added Title class Name Sucessfully!!'




// **************************Advance Dom Manupulation **************************************

// In this we will learn how to add an new HTML element in the already existing HTML file 

const newHeading = document.createElement('h3')

newHeading.innerHTML = 'Just created a new H3 element' 

console.log(newHeading) // we have created the h1 element sucessfully but till now its not
// the part of our HTMl DOM

// In order to add the newly created element in the DOM we first need to get the respective
// element from the DOM first

const parent = document.querySelector('.title') 

// appendChild newly created element ko as a child add karti hai parent element ke 
parent.appendChild(newHeading) 

// agar appko parent ke upar new html element ko add karna hai to u need to add the below
// mentioned function 


// const newHeading1 = document.createElement('h4')

// newHeading1.innerHTML = 'Just created a new H4 element' 

// const parent1 = document.querySelector('.title')

// parent1.insertAdjacentElement('afterbegin', newHeading1)





//************************DOM EVENTS******************************************************/

const button = document.querySelector('button')


const heading1 = document.querySelector('.title')


button.addEventListener('click', (event)=>{
    

    let x = event.bubbles; 
    heading1.style.color = 'yellow'   
    // event.stopPropagation();
    // console.log('Button Clicked!!', event)
    console.log(x) 
    
    })

// button.addEventListener('pointerenter', (event)=>{

//     let x = event.bubbles; 
//     heading1.style.color='green'
//     console.log(x) 
// })


