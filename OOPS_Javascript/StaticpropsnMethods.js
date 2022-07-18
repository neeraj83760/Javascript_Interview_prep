// Static methods and properties ko access karne ke liye class ka instance banane ki jarurat

// configuration, caching, utilities etc me static methods and properties ka use hota hai

// Utilites functions example:

class User{

    constructor(name, age){

        this.name = name;
        this.age = age;
    }
}

// suppose we want to sort the user as per its age

const User1 = new User('Rakesh', 20);

const User2 = new User('John',30)

const User3 = new User('Jane',70)

const Users = [User1, User2, User3]

// Here a,b means comparing one value with other ...a.age means age ke hisab se sort karna hai
Users.sort((a, b)=>{a.age - b.age});

console.log(Users)

