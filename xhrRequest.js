//  Ajax call is a asyncronus 


const url = 'https://jsonplaceholder.typicode.com/users'


// Line 8 se line no 53 tak ke code ko wrap kardo ek user defined Axios function ke andar
// because axios library bhi kuch isi tarah work karti hai 

function myAxios(method, url, body){


    return new Promise((resolve, reject) =>{

        const xhr = new XMLHttpRequest();

        // below one line code ka matlab hai ki hum xhr request start kar rahe hain 
        // xhr under network tab in chrome dev tools shows all the Ajax calls which were made 
        
        // xhr.open('GET', url) 
        
        
        xhr.open(method, url);
        
        
        // bhai 23rd line ka jo code hai wo hum use karenge samjhane ke liye ki jo data
        // hum bhej rahe hai wo json format me hai 
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        // onload event listener hai data ko get karne ke liye
        xhr.onload = () =>{
        
            // console.log('OK')
            // Agar data get karna hai console window par to humein console.log me 
            // ye likhna padega 
        
            // console.log(xhr.response)
            // You can also write
            // console.log(JSON.parse(xhr.response));
        
            // Ye ye batata hai ki request sucessfully sent hui ya nahi 
            console.log(xhr.status);  
        
            // hum status ka use if else condition me bhi kar sakete hai like
        
            if(xhr.status >= 400)
            // console.log('Failed!!') 
            reject(xhr.response)
            else
            // console.log(JSON.parse(xhr.response));
            resolve(JSON.parse(xhr.response))
        
        }
        
        // Maanlo data get karne main Error aa rahi hai to we also have one more Event Listener called oneerror
        xhr.onerror = () =>{
        
            // console.log('Error!!')
            reject(xhr.response);
        
        }
        
        
        // upar line of code se sirf request open ki hai but server pe request gayi nahi hai 
        // so server per request behjne ke liye humein below line of code likhna padega 
        
        
        // VVVVVVVVVVVVVIMP : xhr.send() means hum request send kar rahe hai server ko ... to humein usse
        // pehele hi saare event listeners ko register karna padta hai 
        
        // xhr.send(); 
        
        // Post request ke liye xhr.send() request diffrent hogi 
        
        //xhr.send(body); // body me jo post me daala hai wo jaayega 
        
        
        xhr.send(JSON.stringify(body)); // Ye line of code actual me post request ko sahi se execute karta hai 
        
        //**Upar ki shirf 4 line ka code sufficent hai server se connection banane aur Ajax request bhejne ke liye ***//
        
        // Upar ki chaar line of code se hum data get kar to lenge but humein usse apne browser pe kaise dikhana
        // hai that's a challenging part to humein kuch aur line of code likhna padega 
        
        // Humien event listener Add karna padega to display the data on the browser 
        


    })

}

// Ab jo humne mini Axios function create ki hai usse humein call karna hai 

// myAxios('GET', url); 

//  *********************** Now let see how we can POST a request using myAxios function *****************


// Agar below post request me .then() or catch() use karna hai to humien myAxios se promise ko return karna
// hoga 

myAxios('POST', url, {

    name:'Neeraj',
    Age:21,
    job:'Software Devloper' 
}).then((res) => {

   console.log('This response is from then block', res);

}).catch((err)=>{


});

// POST request output dega id: 11 console me aur agar aap network tab check karoge to
// wo under payload tab wo dega [object object] means jo aapne post request me data bheja wo
// network ne string me convert kar diya jo ke hai object so object ko string me convert karenge to 
// wo dikhayi deta hai as [object, object] so ye valid data nahi hai server pe store nahi hota 
// isliye humien console pe : id:11 hi sirf show hota hai 

