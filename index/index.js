// console.log(`hi wyd`);

// window.alert(`this is an alert`)
// window.alert(`nigga`)

// document.getElementById("myh1").textContent = `hello` ;
// document.getElementById("myp").textContent = `i like idk what ?`

// let x = 200

// console.log(`you are a bitch ${x}`)
// console.log(`you are somthing ${x}`)

// document.getElementById("myp").textContent = `you are ${x}`

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myh1").textContent =`Your username is ${username}`;

// }

// const pi = 3.14;
// let radius;


// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     let circumference;
//     circumference = 2 * pi * radius
//     document.getElementById("myh3").textContent =`The circumference is ${circumference}`;
// }

// let x = 15
// console.log(`200 ${x}`)


// const DecBut = document.getElementById("DecBut")
// const Reset = document.getElementById("Reset")
// const IncBut = document.getElementById("IncBut")
// const countLabel = document.getElementById("countLabel")
// let count=0;

// IncBut.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

// Reset.onclick = function(){
//     count=0;
//     countLabel.textContent = count;
// }

// DecBut.onclick = function(){
//     count--;
//     countLabel.textContent = count; 
// }


// let age = 18;

// if(age >= 18){
//     console.log("You can enter the site")
// }
// else if(age < 0){
//     console.log("negative cannot be age")
// }
// else{
//     console.log("you cant enter this site")
// }

// let isStudent = true;
// let message = isStudent ? "you are a student" : "ur not a student"
// console.log(message)

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * discount/100}`);

// let day = 5;

// switch(day){
//     case 1:
//         console.log(`its monday`);
//         break;
//     case 2:
//         console.log(`it is tuesday`);
//         break;
//     case 3:
//         console.log(`it is wednesday`);
//         break;
//     case 4:
//         console.log(`it is thursday`);
//         break;
//     case 5:
//         console.log(`it is friday`);
//         break;
//     case 6:
//         console.log(`it is saturday`);
//         break;    
//     case 7:
//         console.log(`it is sunday`);
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }


// let testscore = 92;
// let letterGrade;

// switch(true){
//     case testscore >= 90:
//         letterGrade = `A`
//         break;
//     case testscore >= 80:
//         letterGrade = `B`
//         break;
//     case testscore >= 70:
//         letterGrade = `C`
//         break;
//     case testscore >= 60:
//         letterGrade = `D`
//         break;
//     case testscore >= 50:
//         letterGrade = `E`
//         break;
//     default:
//         letterGrade = `F`
        
// }

// console.log(letterGrade)

// let username = `oncode`;

// console.log(username.indexOf("o"));

// console.log(username.length);

// const fullName = "S code";

// let firstName = fullName.slice(0,1);

// console.log(firstName);
// console.log(fullName.slice(2));
// console.log(fullName.slice(0, fullName.indexOf(" ")));

// let loggedin = false
// let username
// let password

// while(!loggedin){
//     username=window.prompt(`enter username`)
//     password=window.prompt(`enter password`)


//     if(username === password){
//         console.log(`Password cannot be the same as username`)
//     } 

//     else{
//         loggedin=true
//     }

// }

// function hbd(){
//     for(i=1; i<=19; i++)
//         console.log(`happy birthday ${i}`);
// }

// hbd()


// variable scope

// let x = 1

// fn2()

// function fn1(){
//     console.log(x)
// }

// function fn2(){
//     let x = 2
//     console.log(x)
// }

// ARRAYS

// let fruits = ["apple", "orange", "banana"]

// fruits[2] = "coconut"
// fruits.push("pineapple")

// for(let fruit of fruits){
//     console.log(fruit)
// }

// let man1 = "buyer"
// let man2 = "seller"
// let man3 = "trader"
// let man4 = "promoter"

// let people = []

// function system(...people){}

// system(man1,man2,man3,man4)

// console.log(people)

// function passGen(length, includeLower, includeNum, includeSymbols, includeUpper){
//     const lowerchars = "abcdefghijklmnopqrstuvwxyz"
//     const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const symbolchars = "!@#$%^&*()"
//     const numberchars = "0123456789"

//     let allowedchars = ""
//     let password = ""

//     allowedchars += includeLower ? lowerchars : ""
//     allowedchars += includeNum ? numberchars : ""
//     allowedchars += includeSymbols ? symbolchars : ""
//     allowedchars += includeUpper ? upperchars : ""

//     if(length <= 0){
//         console.log(`Password length should be at least 1`)
//     }
//     if (allowedchars.length === 0){
//         console.log(`at least 1 condition should be true`)
//     }

//     for(let i = 0; i < length; i++){
//         const randomindex = Math.floor(Math.random() * allowedchars.length)
//         password += allowedchars[randomindex]
//     }

//     return password
// }

// const passwordLength = 12;
// const includeLower = true;
// const includeUpper = true;
// const includeNum = true;
// const includeSymbols = true;

// const password = passGen(passwordLength, length, includeLower, includeNum, includeSymbols, includeUpper)

// console.log(`Generated Password is ${password}`)


// function expressions = a way to define functions as values or vars
// here the function is stored as in hello constant
// similarly functions can be passed as arguements 
// as setTimeout(fn_name, 3000{in miliseconds})
// const hello = function(){
//     console.log("hello")
// }

// function declaration is different where the function is defined and then called



// arrow functions 
const hello2 = (age) => {console.log("hi")
                         console.log(`${age}`)
}
hello2(23);

setTimeout(() => {console.log( `ehhhhhhhhhhh`)}, 3000);


// constructor = special method(function) for defining the properties and methods of objects

function Person(name, age) {
    this.name = name; // Assigning the parameter 'name' to 'this.name'
    this.age = age;   // Assigning the parameter 'age' to 'this.age'
}
  
const person1 = new Person("Alice", 25); //used new keyword
const person2 = new Person("Bob", 30);
  
console.log(person1.name); // Output: Alice
console.log(person2.age);  // Output: 30


function Car(make, model, year, color){
   this.make = make, 
   this.model = model,
   this.year = year, 
   this.color = color, 
   this.drive = function(){console.log(`You drive the ${this.model}` )} 
}

const car1 = new Car("Ford", "raptor", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2025, "silver")

car1.drive(); // Output: You drive the Raptor
car2.drive(); // Output: You drive the Camaro
car3.drive(); // Output: You drive the Charger

// class = better way to work with objects as compared to constructors

class Product{
    constructor(name, price, discount){
        this.name = name
        this.price = price
        this.discount = discount
    }

    display(){
        console.log(`Product = ${this.name}`)
        console.log(`Price = $${this.price}`)
        console.log(`Discount = ${this.discount}%`)
    }
}

const Shampoo = new Product("Santoor", 20, 10);
const Laptop = new Product("Victus", 75000, 15);

Shampoo.display();
Laptop.display();


// // static keyword = makes a var belong to a class itself and makes it accessible without creating an obect

class MathUtils{
    static PI = 3.14

    static getDiameter(radius){
        return radius * 2
    } // this is a static function belonging to the class mathutils in this same way js functions like math.pow are created

    static getCircumference(radius){
        return radius * 2 * this.PI
    }

    static getArea(radius){
        return radius * radius * this.PI
    }
}

console.log(MathUtils.PI) // output = 3.14(here no object was created as compared to above situations)
console.log(MathUtils.getDiameter(3))
console.log(MathUtils.getCircumference(3))
console.log(MathUtils.getArea(3))

class User{
    static userCount = 0

    constructor(username){
        this.username = username
        User.userCount++
    }
}

const user1 = new User("Riya")

console.log(user1.username)
console.log(user1.userCount) // this is wrong because userCount is static and only belongs to the class User (ountput = undefined)
console.log(User.userCount)


// inheritance = allows new class to inherit properties and functions from an already existing one, helps with code reusability

class Animals{
    alive = true

    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
    
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Rabbit extends Animals{ //extends keyword is used to start parent child relation
    name = "Bunny"
}

class Dog extends Animals{
    name = "Tommy"
}

class Tiger extends Animals{
    name = "Tora"
}

const RabbitA = new Rabbit()
const DogA = new Dog()
const TigerA = new Tiger()

console.log(RabbitA.name)
RabbitA.eat()
DogA.sleep()


// super keyword = used to call constructors or access properties from a parent

class Bird{
    constructor(){

    }
}

class Parrot extends Bird{
    constructor(){
        
    }
}

class Crow extends Bird{
    constructor(){
        
    }
}

// setTimeout() = allows to schedule a funcs execution

//sync = line by line execution
//async = allows multiple oper to be completed at same time without waiting, doesnt block exec(mostly network requests and fetching data)

function fnc1(a){
    setTimeout(()=>{console.log('Task 1');
                    a();}, 3000)
}

function fnc2(){
    console.log('Task 2')
    console.log('Task 3')
    console.log('Task 4')
}

fnc1(fnc2)


// error = an object that is created to represent a problem that occurs often with user input or connection establishment
// try{} = encloses code that might cause an error
// catch{} = catch and handle any thrown errors from try{}
// finally{} = (optional) always executes

// try{
//     console.log(x)
// }

// catch(error){
//     console.log(error) // console.error()
// }

// console.log('this is the end')

// try{
//     const dividend = window.prompt("enter dividend")
//     const divisor = window.prompt("enter the divisor")

//     if(divisor == 0){
//         throw new Error("Divisor cannot be 0"); //you can throw errors using throw new Error(it is a constructor) 
//     }


//     const result = dividend / divisor
//     console.log(result)
// }

// catch(error){
//     console.error(error)
// }

// console.log('reached the end')

// event listeners = listens for events to create interactive web pages, 
//                   events = click, mouseover, mouseout
//                   .addEventListener(click, arrow/anonymous function)
