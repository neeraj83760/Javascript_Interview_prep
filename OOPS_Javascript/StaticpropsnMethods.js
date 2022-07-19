// Static methods and properties ko access karne ke liye class ka instance banane ki jarurat

// configuration, caching, utilities etc me static methods and properties ka use hota hai

// Utilites functions example: compareByAge and compareByIncome are utility function 

// Static properties and methods khud class ke andar store ho jaati hai uske liye humein 
// class ka instance banane ki jarurat nahi hai 

// Static property and methods ko hum instance ke upar access nahi kar sakete hai 

// Agar property and method dono static hain tab hum this keyword use kar sakte hai hai 
// us static property ko access karne ke liye using static method

// class User{
    
//     static id = 1;
//     constructor(name, age, income){

//         this.name = name;
//         this.age = age;
//         this.income = income;
//         // Yaha pe this ki jagah user isliye use kiya kyonki this object ki instance ko point karta hai 
//         this.id = User.id++;
//     }

//     static compareByAge(user1, user2){

//         return user1.age - user2.age;

//     }

//     static compareByIncome(user1, user2){

//         return user1.income - user2.income;

//     }
// }

// suppose we want to sort the user as per its age

// const User1 = new User('Rakesh', 20, 5000);

// const User2 = new User('John',30, 10000)

// const User3 = new User('Jane',70, 4000)

// const Users = [User1, User2, User3]

// Here a,b means comparing one value with other ...a.age means age ke hisab se sort karna hai
// Suppose humien ye method User class me chahiye taaki hum isse
// Users.sort((a, b)=>{a.age - b.age});

// Users.sort(User.compareByAge)

// Users.sort(User.compareByIncome);

// console.log(Users)








//**************************Lets see static properties and methods kaise use hote hai Configuration me****

class Config {

static dbUser = 'username';
static dbPassword = 'secret';
static apiToken = 'abcd';

// Hum aise static block bhi bana sakete hai but ye ek hi baar run hota hai wo bhi by using one
// static method ke through jo ussi class me bana ho

// MATH.random()   .... random is also a static method .. yaha pe humien math class ka object 
// banane ki jarurat nahi hai ...Object.hasOwnProperty()... hasOwnProperty bhi static method hai  
static{

    console.log('Hello! Its Initialized!!')
}

static myfunction(){

    console.log('This is myfunction')
}

}


Config.myfunction(); // static block pehle execute hoga myfunction me but key point ye hai
// ki ye ek baar hi execute hota hai baar baar nahi 

// console.log(Config.dbUser, Config.dbPassword, Config.apiToken)
