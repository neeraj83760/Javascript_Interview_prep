const url = 'https://jsonplaceholder.typicode.com/users'


// myAxios GET request example 

// function myAxios(method, url, body = null){

// // fetch by default promise hi return karta hai to humien return karwane ki jarurat nahi hai.     
// return fetch(url)
// .then((res)=>{

//     return res.json(); // this line of code means jo readable stream humein mil rahi hai usse
//     // json ke format me convert kar do 
// })

// }

// // Yaha pe then use kar sakte hai kyonki fetch by default promise return karta hai 
// myAxios('GET', url)
// .then((res)=>{

// console.log(res); // fetch API ka sabse powerful feature hai readableStream 
// // suppose humien sever se bahut bada data receive ho raha hai jaise koi file or koi vedio 
// // we humeien "readableStream" ki wajah se stream ki form me receive ho jaata hai 

// }).catch((err)=>{



// })







// **************************** myAxios POST request example use FETCH API *****************************

function myAxios(method, url, body = null){

    const headers ={

    'Content-Type': 'application/json'    
    }

    return fetch(url, {
     
        method:method,
        headers: headers,
        body: JSON.stringify(body)

    })
    .then((res)=>{
    
        return res.json(); 
    })
    
}
    
    myAxios('POST', url, {

        name:'Raja Babu',
        Job: 'Software Developer',
        Age:32
    })
    .then((res)=>{
    
    console.log(res); 
    
    }).catch((err)=>{
    
    console.log(err)
    
    })