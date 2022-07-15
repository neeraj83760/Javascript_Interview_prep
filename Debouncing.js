
let counter = 0; 

// The below function is called on every Keystroke 
const getData = () =>{

    // calls an API and gets Data 

    console.log("Fetching Data....!!!!" + counter++)


}

// The below line of code means only call getdata method when the diffrence between two keypress
// events is more than or equal to 300 ms

// below delay argument means the delay between to keypress events  

// Here doSomeMagic method called Debouncing function 

const doSomeMagic = function(fn, delay){

    let timer; 


    return function(){
    let context = this, args = arguments;
    
    clearTimeout(timer);
    timer = setTimeout(() => {
            
        fn.apply(context,args);

        }, delay);
    }
}

const betterFunction = doSomeMagic(getData, 300) 