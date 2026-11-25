// OBJECT IN ARRAY

// let students = [
//     {
//         name: "Ali", 
//         marks: 80,
//         city: "quetta",
//         qualification: "BS"
//     },
//     {
//         name: "Ahmed", 
//         marks: 10,
//         city: "isb",
//         qualification: "MS"

//     },
//     {
//         name: "rehman", 
//         marks: 36,
//         city: "lhr",
//         qualification: "Ph.D"
//     }

// ]

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name, students[i].marks, students[i].city, students[i].qualification)
// }





// let employees = [
//     {
//         name: "Shehzad",
//         fathersName: "Amir",
//         d_o_b: "20-12-2000",
//         qualification: "Matric",
//         dept: "Sales & Marketing"
//     },
//     {
//         name: "yasir",
//         fathersName: "jameel",
//         d_o_b: "15-5-1990",
//         qualification: "BBA",
//         dept: "HR"
//     }
// ];
// for (let j = 0; j < employees.length; j++) {
//     console.log("Name : ", employees[j].name, "Father's Name : ", employees[j].fathersName, "Date of Birth:", employees[j].d_o_b, "Qualification:", employees[j].qualification, employees[j].dept)
// }



// let fruits = [
//     {
//         name: "banana",
//         quality: "export",
//         season: "winetr",
//         region: "mirpur khas",
//         transporters: "imran trasnport ltd."
//     },
//     {
//         name: "apple",
//         quality: "domestic",
//         season: "winter",
//         region: "zhob",
//         transporters: "xyz trasnporters"
//     }
// ];
// for (let j = 0; j < fruits.length; j++) {
//     console.log("Name : ", fruits[j].name, "Quality : ", fruits[j].quality, "Season:", fruits[j].season, "Region:", fruits[j].region, "Transporters:", fruits[j].transporters)
// }
// let mobiles = [
//     {
//         company: "Apple",
//         Model: "Iphone 13",
//         releaseYear: "2023",
//         Color: "Silver",
//         Market: "Japanese"
//     },
//     {
//         company: "Q-Mobile",
//         Model: "S8",
//         releaseYear: "2019",
//         Color: "Black",
//         Market: "Pakistani"
//     }
// ];
// for (let j = 0; j < mobiles.length; j++) {
//     console.log("Company : ", mobiles[j].company, "Model : ", mobiles[j].Model, "Year of Relese:", mobiles[j].releaseYear, "Color:", mobiles[j].Color, "Market: ", mobiles[j].Market)
// }



// let Countires = [
//     {
//         country: "pak",
//         president: "Asif Ali Zardari",
//         PM: "Shehbad Shareef",
//         capital: "Islamabad",
//         currency: "pkr"
//     },
//     {
//         country: "afg",
//         president: "haibatullah",
//         PM: "siraj ud din haqqani",
//         capital: "Kabul",
//         currency: "Afg$"
//     }
// ];
// for (let j = 0; j < employees.length; j++) {
//     console.log("Name : ", employees[j].name, "Father's Name : ", employees[j].fathersName, "Date of Birth:", employees[j].d_o_b, "Qualification:", employees[j].qualification, employees[j].dept)
// }
// let employees = [
//     {
//         name: "Shehzad",
//         fathersName: "Amir",
//         d_o_b: "20-12-2000",
//         qualification: "Matric",
//         dept: "Sales & Marketing"
//     },
//     {
//         name: "yasir",
//         fathersName: "jameel",
//         d_o_b: "15-5-1990",
//         qualification: "BBA",
//         dept: "HR"
//     }
// ];
// for (let j = 0; j < employees.length; j++) {
//     console.log("Name : ", employees[j].name, "Father's Name : ", employees[j].fathersName, "Date of Birth:", employees[j].d_o_b, "Qualification:", employees[j].qualification, employees[j].dept)
// }



// FUNCTIONS

// function printIt(){
//     console.log("Welcome to Quetta");
//     console.log("++++++++++++++++");
// }

// printIt()
// printIt()
// printIt()
// printIt()


// function greet(name){
//     console.log("Hello " + name);

// }
// greet("Waleed!")
// greet("Zain!")


// function greet(name,age){
//     console.log("Hello " +name, "Age : ",age);

// }
// greet("Waleed!", "26")
// greet("Zain!", "20")


// ADDITION

// function add(a, b){
//     return a + b;
// }
// console.log(add(2,6));
// document.write(add(10,6));


// add(60, 50)

// // SUBTRACTION

// function sub(a, b){
// }
// console.log(a-b);
// sub(60, 50)


// // PRODUCT
// function pro(a, b){
//     console.log(a*b);
// }
// pro(6, 5)


// // DIVISION
// function div(a, b){
//     console.log(a / b);
// }
// div(100, 5)










// function add(a, b) {
//     alert(a + b);
// }

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");

// add(num1, num2);



// function checkAge(age){
//     if(age < 0){
//         return;
//     }
//     console.log("Age is: ", age);
// }
// checkAge(20)
// checkAge(25)
// checkAge(36)

let balance = 0

function buySnack(coins) {

    if (coins == 50) {
        return "Chips";
    } else if (coins == 40) {
        return "You can buy Biscuits";
    }else if (coins == 30){
        return "Juice"
    }
}


// console.log(buySnack(50));
// console.log(buySnack(40));
// console.log(buySnack(30));


