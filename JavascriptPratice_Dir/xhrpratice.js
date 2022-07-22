// Minimum lines of code which is required to get the data in your browser console 
// Ye ajax asyncronous call hai jo hum server pe send karte hai 

//************VVVVIMP :  Bhai array of objects ke liye always use ForEach loop *****************/

const url = 'https://jsonplaceholder.typicode.com/users/'

const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.onload = () => {

 console.log(JSON.parse(xhr.response));

 let data = JSON.parse(xhr.response)

//  console.log(Object.keys(data).length);

//  console.log(Object.keys(data));
 
//  console.log(Object.keys(data)[1]);
 
//  console.log(Object.values(data)[4]);

//  console.log(Object.entries(data)[4])


// let p = Object.values(data)[1]

//  document.querySelector('#textbox1').innerHTML = JSON.stringify(p);

 let table = document.querySelector('#myTable');

    Object.values(data).forEach((empID, Index)=> {
      
        console.log(empID.email)

        let row = `<tr>
    
              <td>${empID.id}</td>
                 <td>${empID.name}</td>
                 <td>${empID.username}</td>
                 <td>${empID.email}</td>
                
                </tr>
             `

             table.innerHTML += row   

    })

}

xhr.send();











//********************** Minimum lines of code which is required to post the data to the server ***********


// const url = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest();

// xhr.open('POST', url);

// xhr.setRequestHeader('Content-Type', 'application/json');

// xhr.onload = () => {

//     console.log(JSON.parse(xhr.response));
// }

// xhr.send(JSON.stringify({

//     name:'Neeraj',
//     age:21
// }));




