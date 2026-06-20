
let userData = [];
async function data(){

   const loading =   document.getElementById("loading")
   loading.style.display = "block";

try{
    const res = await fetch('http://localhost:3000/users');
   const user =  await res.json();
    return user;
}   

catch(error){
    console.log(error);
}
  
finally{
 loading.style.display = "none";

}

}
data().
then(users=>{
  userData = users;
 DisplayUser(userData);
})



// Display User
function DisplayUser(users){
const userList = document.getElementById("userList");
   userList.innerHTML = "";
     users.forEach(user=>{
    userList.innerHTML += 
    `
    <tr>
    <td>${user.id}</td>
     <td>${user.name}</td>
    <td>${user.email}</td>
     <td>
          <button onclick="DeleteUser('${user.id}')">
            Delete
          </button>
        </td>
    </tr>
    `
  })
}


//Filter User
document.getElementById("searchText").addEventListener("input", function () {
  
  const inputText = this.value.toLowerCase();

  const filterUser = userData.filter(user => {
    return user.name.toLowerCase().includes(inputText);
  })

  DisplayUser(filterUser);
})


// Create User.........
  document.getElementById("addUser").addEventListener("click",async()=>{
  const name  = document.getElementById("name").value;
  const email  = document.getElementById("email").value;
  
 
    if(name === "" || email === ""){
      alert("All fileds are required")
      return ;
    }

  const response = await fetch('http://localhost:3000/users',{

      method : "POST",
      headers : {
        "Content-type" : "application/json"
        },
        body : JSON.stringify({

          name,email
        })
  });

  const newUser = await response.json();

  userData.push(newUser);
   DisplayUser(userData);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

});




async function DeleteUser(id) {
  console.log(id)
  try {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    });
    location.reload();

    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

//dark theme


const modeBtn = document.getElementById("themeBtn");
modeBtn.addEventListener("click",()=>{
  if(document.body.style.backgroundColor == "white"){
    document.body.style.backgroundColor == "black"
  }
  else{
     document.body.style.backgroundColor == "white"
  }
})


//logout user
document.getElementById("logoutBtn")
.addEventListener("click", () => {

    sessionStorage.removeItem(
        "isLoggedIn"
    );

    window.location.href =
        "login.html";
});











// let allUsers = [];

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     document.getElementById("loding").style.display = "none";

//     allUsers = users; // Store users for filtering

//     displayUsers(allUsers);
//   })
//   .catch(error => console.error("Error fetching data:", error));

// function displayUsers(users) {
//   const list = document.getElementById("user-list");

//     list.innerHTML = ""; // Clear existing data

//   users.forEach(({ id, name, email }) => {
//     list.insertAdjacentHTML(
//     "beforeend",
//     `
//     <tr>
//       <td>${id}</td>
//       <td>${name}</td>
//       <td>${email}</td>
//     </tr>
//     `
//   );
//   });
// }

// // Search functionality
// document.getElementById("search").addEventListener("input", function () {
//   const searchText = this.value.toLowerCase();

//   const filteredUsers = allUsers.filter(user =>
//     user.name.toLowerCase().includes(searchText) || 
//     user.email.toLowerCase().includes(searchText)
//   );

//   displayUsers(filteredUsers);
// });


// //create user functionality

// document.getElementById("addUser").addEventListener("click", () => {

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name,
//       email
//     })
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log("Created User:", data);
//     alert("User Created Successfully!");
//   })
//   .catch(error => console.error(error));
// });








//----------------------------Promise-----------------------------//

// producer
// function apiUrl(){
// let p1 = new Promise(function(resolve,reject){
//   console.log("Promise 1");
//   let x = prompt("Enter a number");
//   setTimeout(()=>{

//     if(x > 5){
//     resolve(x);
//   }
//   else{
//     reject(x);
//   }},3000);
  
  
// });
// return p1;
// };

// let p2  = apiUrl();
// p2.then((result)=>{
//   console.log("Promise Rsolved" + result);
// },(error)=>{
//   console.log("Promise rejected" + error);
// })


//   function appData (){
//     let p3 = new Promise(function(resolve,reject){

//   let statement = "pending";

//   console.log("Status:", statement);
//   console.log("Your statement request has been received.");
//   console.log("We will send the statement to your email within 4 hours.");
//   setTimeout(()=>{
//   let statementGenerated = false;
//   if(statementGenerated){
//     statement = "resolved";
//     resolve("Statement generated successfully.");
//     console.log("Email sent to customer.");
//     console.log("Status:", statement);
//   }
//   else{
//     reject("Failed to generate statement.");
//   }
//   },4000);

  
// });
// return p3;
// }

// function appData2(){
//   let p4 = new Promise(function(resolve,reject){
//     let x = 10;
//     setTimeout(()=>{
//       if(x > 5){
//         resolve("Promise resolved 2");
//       }
//       else{
//         reject("Promise rejected 2 ");
//       }
//     },2000);
//   })
//   return p4;
// }


// appData()
// .then(()=>{
//   console.log("Promise resolved:");
//   return appData2()
//   },()=>{
//   console.log("Promise rejected:");
// })
// .then(()=>{
//     console.log("Promise resolved: p4");
//   },
//   ()=>  {

//   console.log("Promise rejected: p4");
// });

// ----------------------async/await--------------//


// async function fetchData(){
//     await appData()
//     .then(()=>{
//  console.log("Promise resolved: p1");
//   },()=>{
//   console.log("Promise rejected:p1 ");
// })
//     await appData2()
//     .then(()=>{
//     console.log("Promise resolved: p2");
//   },
//   ()=>  {

//   console.log("Promise rejected: p2");
// });
// }
// fetchData();



