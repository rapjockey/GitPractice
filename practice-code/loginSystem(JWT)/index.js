document
.getElementById("loginBtn")
.addEventListener("click", async() => {
    

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const response = await fetch(
        `http://localhost:3000/users?Username=${username}`
    );

    const users = await response.json();

    console.log(users);

    if (users.length > 0 &&
  users[0].password === password) {

     const user = users[0];

        alert("Login Success");

        const fakeToken = {
    id: user.id,
    username: user.Username,
    exp: Date.now() + 100000
    };

        localStorage.setItem(
            "token",
           JSON.stringify(fakeToken)
        );

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        window.location.href =
        "dashboard.html";

    } else {

        alert("Invalid Credentials");
    }

});

 