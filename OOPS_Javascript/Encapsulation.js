//  # laga to kisi bhi property se pehle to make it private so that bahar
// se usee koi modify na kar paaye object bana ke

// Getters and setters methods ka use hum karte hai private properties ko modify karne
// karne ke liye for example humne BackAccount function me getBalance and setBalance ka use kiya
// hai ...... getter and setter banane ke liye bus set and get keyword laga do 

class BankAccount{

    customerName;
    accountNumber = Date.now();
    #balance = 0;


    constructor(customerName, balance){

        this.customerName = customerName;
        this.accountNumber = Date.now;
        this.#balance = balance;
    }

    deposit(amount){

        this.#balance = this.#balance + amount; 
    }

    withdraw(amount){

    this.#balance = this.#balance - amount;

    }

    // Now setBalance ek public method hai jiske through hum private #balance method ko update kar sakte hai
    set Balance(amount){

        if(isNaN(amount)){

            throw new Error("Amount is not a valid input")
        }
     
        this.#balance = amount;
        
    }


    get Balance(){

     return this.#balance;
    }
}



class CurrentAccount extends BankAccount{

    transactionLimit = 50000;

    constructor(customerName, balance=0){
        // Agar hum kisi class se inherit kar rahe hai so super ka matlab current class ke parent 
        // constructor ko call karo pehle
        super(customerName, balance)

        // VVIMP point : Agar kisi bhi class me private property hoti hai to hum usse child class ke constructor me
        //usse console.log(this.#balance) access nahi kar sakte
    }

    takeBusinessLoan = function(amount){

        console.log('Taking Business Loan' + amount)

    }
}


class SavingAccount extends BankAccount{


    transactionLimit = 10000;

    constructor(customerName, balance=0){

        super(customerName, balance)
    }

    #calculateInterest(amount){

        console.log('Calculating Interest');
    }

    takePersonalLoan(amount){


        this.#calculateInterest(amount);

    console.log('Taking Personal Loan' + amount)
    }

}


const rakeshAccount = new SavingAccount('Rakesh',5000);

// The Problem with the above class is that we can modify the properties of the class from outside by 
// creating an object of the respectve class. Example is the below two lines of code. 

//rakeshAccount.balance = 2000; // You can modify the property of the class in this way as well also

rakeshAccount.balance = 'Hello'; // You can modify the property of the class in this way as well also
// that's why we need encapsulatation here to avoid this kind of modification of properties


// now balance ek private property hai to hum usse bhar se directly modify to nahi kar sakte 
// but class me ek public method hai setBalance jiska use karke hum balance property ko update 
// kar sakte hai ..jaise below line of code me humne kiya hai 
// but isme bhi ek problem hai agar hum rakeshAccount.setBalance('hello') kar to fir se
// class ki property update ho jaayegi .... but is problem ko fix karne ke liye humein 
// setBalance() me validation lagana padega that's it 

rakeshAccount.Balance;

// ab jasie hum setBalance se private members ko access kar rahe hai to hum balance ko get
// karne ke liye directly console.log(rakeshAccount.#balance) se balace get nahi kar
// sakte uske liye humien ek naya get balance method banana padega  

// console.log(rakeshAccount.getBalance());

// get aur set keyword use kiya method ke aage to usse method ki tarah call karne ki jarurat 
// nahi u can it directly like rakeshAccount.Balance  

// console.log(rakeshAccount);

console.log(rakeshAccount.takePersonalLoan(300))


