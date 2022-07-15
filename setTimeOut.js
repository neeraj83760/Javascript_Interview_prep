let val; 

document.querySelector('#btn').addEventListener('click', ()=>{

clearTimeout(val);

})

function myfunction(){
val = setTimeout(() => {
    
document.querySelector('#id').innerHTML = 'It seems like u have not clicked the btn so we printed the Text!!'    

},3000);

}

myfunction();