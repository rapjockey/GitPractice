const editId = localStorage.getItem("editUserId");
let userData = [];

fetch(`http://localhost:3000/users/${editId}`)
.then(res => res.json())
.then(users => {
    userData = users;
  
    document.getElementById("Fname").value =
        users.userData.name;

    document.getElementById("Uname").value =
        users.userData.Username;

    document.getElementById("password").value =
        users.userData.password;

    document.getElementById("number").value =
        users.userData.number;

    document.getElementById("city").value =
        users.userData.city;

    document.getElementById("department").value =
        users.userData.department;
});

document.getElementById("updateUser")
.addEventListener("click", async () => {

    const updatedUser = {
        userData: {
            name: document.getElementById("Fname").value,
            Username: document.getElementById("Uname").value,
            password: document.getElementById("password").value,
            number: document.getElementById("number").value,
            city: document.getElementById("city").value,
            department: document.getElementById("department").value
        }
    };

    await fetch(`http://localhost:3000/users/${editId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });

    localStorage.removeItem("editUserId");

    alert("User Updated Successfully");

    window.location.href = "profile.html";
});