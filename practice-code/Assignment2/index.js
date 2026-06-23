//convert traditional funtion into arrow function

// function addNumbers(a,b){
//     return a+b;
// }

const addNumbers = (a,b) => a + b;
console.log(addNumbers(10,20));

const addMultiply = (a,b) => {
    return console.log(addMultiply);
}

const calculateDiscount = (price,discount) => {
   return  price - (price * discount / 100);
}
console.log(calculateDiscount(1000,10))

const fullName = (fName,lName) => {
     return   `${fName} ${lName}`
}
console.log(fullName("Rahul","Jadhav"));


// Student Object

const student = {
    name : "Rahul",
    course : "MSc",
    score : "70%"
}
console.log(student);