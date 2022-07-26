
// const obj = [{name:'Neeraj', Age: 36},{name:'sanju', Age:23},{name:'rahul', Age:12},{name:'Soni', Age:34}]

// obj.forEach((student)=>{

//     console.log(student.name);

// })


const url = 'https://jsonplaceholder.typicode.com/users'


// function myAxios(method, url, body=null){

//     return fetch(url).then((res)=>{

 //      return res.json();
//     })

// }

// myAxios('GET', url).
// then((res)=> {

// console.log(res)

// })   


//*********************************MyAxios function for the POST request*****************************/


function myAxios(method, url, body){


    const headers = {

    'Content-Type': 'application/json',    
    }
    return fetch(url,{
    
        method: method,
        headers: headers,
        body: JSON.stringify(body)

    }).then((res)=>{
       
        return res.json();

    })

}

myAxios('POST',url, {

    name:'Raja Babu',
    Job: 'Software Developer',
    Age:32
}).then((res)=>{

    console.log(res);
})
