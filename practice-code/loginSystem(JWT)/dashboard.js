const token =
JSON.parse(localStorage.getItem("token"));

console.log(token);
console.log("Current Time:", Date.now());

if (!token || Date.now() > token.exp) {

    alert("Session Expired");

    localStorage.clear();

    window.location.href =
    "index.html";
}

const user =
JSON.parse(localStorage.getItem("user"));

document
.getElementById("welcome")
.textContent =
`Welcome ${user.name}

`;


async function showData() {

    const response =
    await fetch("http://localhost:3000/users");

    const users =
    await response.json();

    const userList =
    document.getElementById("tableData");

    userList.innerHTML = "";

    users.forEach(user => {

        userList.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.Username}</td>
                <td>${user.number}</td>
                <td>${user.city}</td>
                <td>${user.department}</td>
            </tr>
        `;
    });
}

showData();


document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href =
    "index.html";
});

