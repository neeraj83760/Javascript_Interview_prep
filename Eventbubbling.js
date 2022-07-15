document.querySelector('#grandParent')
.addEventListener('click',()=>{

console.log('Grand Parent Clicked!!!!!!!')

})

document.querySelector('#parent')
.addEventListener('click',()=>{

console.log('Parent Clicked!!!!!!!')

})

document.querySelector('#child')
.addEventListener('click',(e)=>{

console.log('Child Clicked!!!!!!!')

e.stopPropagation();

})


// Keypoint : If u don't pass any third agrument in the EventLsitnser functions 
// it will be considered as false ....example given below

// Keypoint : If we just made boolean "false" and click on the child element it will
// bubble from top  to bottom which we called trickling 

// False : Means event capturing , True: Means event bubbling

// e.stopPropogation() is used if 
/*

document.querySelector('#grandParent')
.addEventListener('click',()=>{

console.log('Grand Parent Clicked!!!!!!!')

}, false)


*/