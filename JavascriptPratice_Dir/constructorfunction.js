function myfunction(name, age){

    this.name = name;
    this.age  = age;

  // Yaad rakhna aap normal functions nahi bana sakte constructor function me this keyword ke saath 
  // hi function banana padega 
  this.StudentData = function(){

        console.log(`The name of the student is ${this.name} and the age is ${this.age}`);
    }

}

const obj = new myfunction('Neeraj', 21);

const obj1 = new myfunction('Raju', 31);


obj.StudentData();

console.log(obj)

console.log(obj1)


myfunction.prototype.StudentHobby = function(){


    console.log('We like all the Games!!')

}

