

document.getElementById("loginBtn")
.addEventListener("click", () => {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(username === "admin" &&
       password === "1234") {

        sessionStorage.setItem(
            "isLoggedIn",
            "true"
        );

        window.location.href = "index.html";

    } else {
        alert("Invalid Credentials");
    }

    // sessionStorage.removeItem(
    //         "isLoggedIn",
    //         "true"
    //     );
});