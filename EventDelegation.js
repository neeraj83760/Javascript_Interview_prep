// document.querySelector('#category').addEventListener('click',(e)=>{

// console.log('Category Clicked', e.target.id)

// })
// e.target will show which element we have clicked u will also check the same in the 
// browser console

// document.querySelector('#category').addEventListener('click',(e)=>{

//     console.log('Category Clicked', e.target.id)

//     window.location.href = '/'+ e.target.id
    
//     })

//  After adding the Event Listener when u add on character in the Inputbox check the event
// function target property 

document.querySelector('#name').addEventListener('keyup', (e)=>{

    console.log('This is name Input Box!!', e)

    if(e.target.dataset.uppercase != undefined){

        e.target.value = e.target.value.toUpperCase(); 
    }

})

