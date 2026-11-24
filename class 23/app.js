// ARRAY METHODS






// const nums = ["waleed", "ahmed", "bilal", "raheem", "tahir", "waheed"];

// nums.push(5);
// nums.pop();
// nums.shift();
// nums.unshift();

// nums.slice(1, 3);
// console.log(nums.slice(0, 3))
// nums.splice(1, 1, "amir");
// console.log(nums);

// console.log(nums.concat(["shehzad", "umar"]));
// console.log(nums.at(-2));
// console.log(nums.includes("ahmed"));
// console.log(nums.indexOf("waleed"));
// console.log(nums.reverse());
// console.log(nums.sort());
// console.log(nums.join(","));

// OBJECT IN JS


let student = {
    name: "Waleed",
    age: 26,
    course: "Web Development",
    city: "quetta"
}

console.log(student);
// DOT NOTATION
console.log(student.name);
console.log(student.course);
console.log(student.city);


// BRACKET NOTATION 
console.log(student["name"]);
console.log(student["course"]);



// UPDATE OBJECT VALUES
student.name = "Umar";
console.log(student);

// ADD NEW PROPERTIES

student.email = "umarkhan@gmail.com";
student.country = "Pakistan";
console.log(student);
console.log(student.country);


// DELETE PROPERTY
delete student.city;
console.log(student);






let employee ={
    name: "Yasir",
    age: 26,
    salary: 500000,
    isActive: true,
    skills: ["HTML", "CSS", "Javascript"]
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.isActive);
console.log(employee.salary);
console.log(employee.skills[1]);


console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));








