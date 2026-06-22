
let userData = [];

const DATA_URL = fetch('http://localhost:3000/users')
.then(res=>(res.json()))
.then(users => {
    userData = users;
})




//Create User

document.getElementById("submitUser").addEventListener("click", async () => {
    const userData = {
      name  :  document.getElementById("Fname").value,
      Username :  document.getElementById("Uname").value,
      password :  document.getElementById("password").value,
      number :  document.getElementById("number").value,
      city : document.getElementById("city").value,
      department :  document.getElementById("department").value
    };
        
    if (
    !name ||
    !Username ||
    !password ||
    !number ||
    !city ||
    !department
        ) {
        alert("All fields are required");
        return;
        }

    try{
        const createUser = await fetch('http://localhost:3000/users',{
        method : "POST",
        headers : {
        "Content-type": "application/json"
        },
        body : JSON.stringify({
            userData
        })
    })
    console.log("User Created" +  createUser);
     const newUser = await createUser.json();
     window.location.href = "index.html";

    }
    catch(error){
        console.log(error);
    }

   
})


