function BankAccount(customerName, balance=0){

    this.customerName = customerName;
    // Datenow function will always give us a new Account number 
    this.accountNumber = Date.now();
    this.balance = balance;


    this.deposit = function(amount){

    this.balance = this.balance + amount; 
    
    }

    this.withdraw = function(amount){

        this.balance = this.balance - amount; 
        
        }
}

// const neerajAccount = new BankAccount("Neeraj G") 

// const johnAccount = new BankAccount("John sir")


// The question is can we share the deposit and withdraw function so that there is no need of 
// allocating the seprate memory for withdraw and Deposit functions after creation of every object 

// The answer to solve this problem is prototype 

// console.log(neerajAccount);

// console.log(johnAccount);

// In javascript functions itself the Object in Javascript hum function pe dot ka use karke
// hum property add bhi kar sakte hai. lets try it 

console.log(BankAccount.prototype);

BankAccount.prototype.test = 'This is one Additional property!!'

// VVVVIMP : Jab bhi javascript ke andar koi bhi function banta hai javascript uske andar
// ek property add kar deta hai "Prototype" jo ki ek empty object hota hai jo ki humare 
//liye us function ke upar bana deta hai .. so prototpye ki value hoti hai empty object 
//