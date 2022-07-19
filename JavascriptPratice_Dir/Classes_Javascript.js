class myfunction{

    constructor(name, age){
    this.name = name;
    this.age = age;
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


