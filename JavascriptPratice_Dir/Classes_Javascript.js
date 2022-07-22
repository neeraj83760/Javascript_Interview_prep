class myfunction{

    #fees= 0;

    constructor(name, age, fees){
    this.name = name;
    this.age = age;

    this.#fees = fees;
    }

    #StudentData(){

        console.log(`The name of the student is ${this.name} and the age is ${this.age}`);

    }
    
    // Here the studentDress function is helping in accessing the private methods of the myfunction class 
    StudentDress(){
        
        this.#StudentData();
        console.log('Black pants and white shirt!!')
    }



}

const obj = new myfunction('Saanu', 23);

Object.prototype.StudentHobby = function(){

    console.log('This is the Hobby function')
}

console.log(obj);

const obj1 = new myfunction('Saanu', 23);

obj1.StudentHobby()
obj.StudentHobby()

// obj1.StudentData();
obj1.StudentDress();


const obj2 = new myfunction('Sanju', 23, 1000);

obj2.name = 'Raju'
obj2.age = 34
obj2.fees = 10000

console.log(obj2)

