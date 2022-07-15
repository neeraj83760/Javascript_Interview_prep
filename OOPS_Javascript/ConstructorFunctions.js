// The below one is not the normal function it's a constructor function 

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

// const neerajAccount = new BankAccount('Neeraj', 1000);

// console.log(neerajAccount);

// considering john's account is a zero balance account 
// const johnAccount = new BankAccount('John');

// console.log(johnAccount);

// Lets do onething update the balance of neerajAccount 

// neerajAccount.balance = 30000
// console.log(neerajAccount)

// But dont u thing updating the balance outside from the function of an individual is quite risky
// we should keep it secret and need to encapsulate it 

// But creating a method in the constructor function and then adding the blance is must safer
// compare to directly giving the access to the properties of the constuctor function

// neerajAccount.deposit(5000);

// console.log(neerajAccount);
// neerajAccount.withdraw(100);

// console.log(neerajAccount);

// **************************From here onwards we will write the code of the DOM manipulation **************

const accountForm = document.querySelector('#accountForm');

const customerName = document.querySelector('#customerName');

const balance = document.querySelector('#balance');



const depositForm = document.querySelector('#depositForm');

const accountNumber = document.querySelector('#accountNumber');

const amount = document.querySelector('#amount');


// console.log(accountForm)


//jitne bhi accounts hum html form me data daalke banayenge wo hum array me store karenge
// kyonki filhaal humare pass database nahi hai 

const accounts = []; 

accountForm.addEventListener('submit', (e)=>{
    
    // agar preventDefault nahi karenge to page refresh ho jaayega 
    e.preventDefault();
    // string ko number me convert karne ke liye just + ka sign laga do 
    const account = new BankAccount(customerName.value, +balance.value);

    accounts.push(account);

    console.log(accounts)
    
})

// **************************Deposit form DOM manupulation ****************************************

// const depositForm = document.querySelector('#depositForm');

// const accountNumber = document.querySelector('#accountNumber');

// const amount = document.querySelector('#amount');



/*    *************The below one is the Prevent Default definition****************** 

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL
Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.

*/

depositForm.addEventListener('submit', (e)=>{

e.preventDefault();

// saare accounts mese humein wo account doondna hai jiske account me humein paise deposit karne hai

const account = accounts.find((account)=> account.accountNumber === +accountNumber.value

);

account.deposit(+amount.value);

console.log(accounts);

})

