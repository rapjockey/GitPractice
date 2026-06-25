// //convert traditional funtion into arrow function

// // function addNumbers(a,b){
// //     return a+b;
// // }

// const addNumbers = (a,b) => a + b;
// console.log(addNumbers(10,20));

// const addMultiply = (a,b) => {
//     return console.log(addMultiply);
// }

// const calculateDiscount = (price,discount) => {
//    return  price - (price * discount / 100);
// }
// console.log(calculateDiscount(1000,10))

// const fullName = (fName,lName) => {
//      return   `${fName} ${lName}`
// }
// console.log(fullName("Rahul","Jadhav"));


// // Student Object

// const student = [{
//     name : "Rahul",
//     course : "MSc",
//     score : "70%"
// }]
// // console.log(student);

// const display = (users) => {
//     console.log("hello")
//     users.forEach(user => {
//      console.log(
//         `    
//         ${user.name} 
//         ${user.course} 
//         ${user.score}
//         `
//     )
// })
// }
// display(student);


// //Object Destructing

// const user = {
//     name : "Rahul",
//     email : "rahul@1234",
//     number : "1234569870"
// }

// const{name,email,number}=user;
// console.log(name);

// // Array Destrucure 

// const arr = ["Rahul", "1234", "msc"];

// const [first, second] = arr;
// console.log(first);
// console.log(second);

// //Spread Operator

// //using Array
// const array1 = ["banana", "apple","mango"];
// const array2 = [...array1]
// console.log(array2);
// console.log(...array2);

// //using object

// const obj1 = {
//     name : "rapper",
//     surname : "music",
//     address : "studio"
// }
// const obj2 ={
//     ...obj1,
//     name : "rahul"
// }
// console.log(obj1);
// console.log(...Object.values(obj2)); // Objects are not iterable there for we can display like this


// //Nested Obj
// const nestObj = {
//     id : "101",
//     fullname : {
//         name : "rahul",
//          midname : "santosh",
//          surname : "jadhav"   
//     }
// }

// const nestObj2 = {
//     ...nestObj,
//     fullname : {
//         ...nestObj.fullname,
//         name : "Rapper"
//     }
// }
// console.log(...Object.values(nestObj.id));
// console.log(...Object.values(nestObj.fullname));
// console.log(nestObj2);

// const name = { 
//     name : "rahul"
// }
// // console.log(name);
// const changeName = name;
// changeName.name = "jadhav";
// console.log(changeName);

// //higher order function

// const a = [10,20,30]
// console.log(a);

// const b = a.forEach((e) => { // for each not contain new array

// e+1

// })

 // console.log(`value of b is ${b}`);
// let a = [10,20,30]
//  const x = a.map((e) =>  e+1); // map contain a new array

// console.log(x);

// const b = a.filter((e) => e>10 );
// console.log(b);

// const products = [
//   {
//     productName: "Keyboard",
//     marks: 36,
    
//   },
//   {
//     productName: "Mouse",
//     marks: 20,
    
//   },
//   {
//     productName: "Monitor",
//     marks: 75,
    
//   },
//   {
//     su: "Book",
//     marks: 300,
//     category: "Education"
//   }
// ];
// const filter = products.filter((e) => e.price <= 800);
// // console.log(filter);

// products.map((e)=> console.log(`Product:${e.productName} & Price : ${e.price}`));

// const students = [
//   {
//     name: "Rahul",
//     marks: 36,
    
//   },
//   {
//     name: "prawin",
//     marks: 75,
    
//   },
//   {
//     name: "raju",
//     marks: 25,
    
//   },
//   {
//     name: "raja",
//     marks: 50,

//   }
// ];
// const passStudents = students.filter((e) => e.marks>35);
// console.log(passStudents);


// const emp = [
//     {
//         employeeName : "Rahul",
//         department : "Software"
//     },
//     {
//         employeeName : "Raju",
//         department : "IT"
//     },
//     {
//         employeeName : "Prawin",
//         department : "HR"
//     },
//     {
//         employeeName : "Raja",
//         department : "IT"
//     }

// ];

// const empFilter = emp.filter((e) => e.department == "IT");
// console.log(empFilter);
// const name = empFilter.map((e) => e.employeeName.toUpperCase());
// console.log(...name);


//  const promise = new Promise ( async (resolve,reject) => {
//    let data = true;
//     try{
//         if(data) {
//         resolve(data);
//     }
//    }
//     catch{
//             reject();
//          }
    
// })
// promise
// .then((resolve)=>{
//     setTimeout(()=>{
//         console.log("Accept")
//     },2000)
// },(reject)=>{
//     console.log("reject")
// })


// async function displayData(){
//     try{
//     const res =  await fetch('https://jsonplaceholder.typicode.com/users')
//     if(!res.ok){
//         console.log(`Http Error : ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data);
//     }
//     catch(error){
//         if(error.message.includes("Failed to fetch")){
//             console.log("Check Your Internet Connection")
//         }
//         console.log("error")
//     }

   
// }
// displayData();

// import{add,sub,divide,multi} from './main.js';
// import{str,reverse,count} from './main.js';

// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(divide(10,20));
// console.log(multi(10,20));


// console.log(str("Rahul"));
// console.log(reverse("Rahul"));
// console.log(count("Rahul"));

const students = [
  { id: 1, name: "john", score: 85, status: "pass" },
  { id: 2, name: "rahul", score: 75, status: "pass" },
  { id: 3, name: "amit", score: 45, status: "fail" },
  { id: 4, name: "priya", score: 90, status: "pass" },
  { id: 5, name: "neha", score: 35, status: "fail" }
];

const passStud = students.filter((e)=> {
return e.status === "pass"
})
// console.log(passStud);

const transformCap = students.map((e) => {
    return e.name.toUpperCase();
})

// console.log(transformCap);

function saveStuents (data) {
 return new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve( {sucess : "true",
            message: "Data Saved",
            data})
    },3000)
    })
}

  const  allLogs = async () => {
    try{
        console.log(`Original data `,students);
        console.log(`passing students `,passStud);
        console.log(`Capital Names `,transformCap);
        const res = await saveStuents(transformCap)
        console.log("response got : ",res);
    }
    catch{
        console.log("error");
        
    }
 }
allLogs();
