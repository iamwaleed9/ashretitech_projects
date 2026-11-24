// Type of loops
// for, do-while, while

// way of declaring "for" loop:
// for(initialize, condition, increment/decrement){
//     console("variable")
// }


// let table = +prompt("Enter the number")

// for(let i = 1; i <= 10; i++){
//     console.log(table, " X " , i , " = " ,(table * i))
// }

// for (let j =1; j<=10;j++){
//     console.log(j)
// }

// let s = +prompt("Enter Your start  Number ")
// let e = +prompt("Enter Your end  Number ")
// let table = +prompt("Enter the table")
// for( s; s <= e; s++){
//     console.log(table, 'X' , s, "=" , (table*s))
// }



// WHILE LOOP


// let index = 5;
// while(index <=10){
//     console.log(index);
//     index++
// }

// let index = +prompt("Enter Your First Number");
// let second =+prompt("Enter Your Second Number ")
// let table = +prompt("Enter the table")
// while(index <=second){
//     console.log(table,  "x" , index , "=" , (table * index));
//     index++
// }

// let index = 4;
// while(index <= 10){
//     console.log(index);
//     index++
// }



// DO-WHILE LOOP

// let sValue = +prompt("Enter start value");
// let eValue = +prompt("Enter End value")
// let table = +prompt("Enter the table")
// do{
//     console.log(table, "x", sValue, "=", (table * sValue));
//     sValue++
// }while(sValue <= eValue)



// FOR LOOP in ARRAY

let students = ["waleed", "jail", "mati", "zohaib", "Arif"]
for (let i = 0; i < students.length; i++)
    console.log(students[i])

