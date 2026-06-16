let allUsers = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    document.getElementById("loding").style.display = "none";

    allUsers = users; // Store users for filtering

    displayUsers(allUsers);
  })
  .catch(error => console.error("Error fetching data:", error));

function displayUsers(users) {
  const list = document.getElementById("user-list");

    list.innerHTML = ""; // Clear existing data

  users.forEach(({ id, name, email }) => {
    list.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
      <td>11</td>
      <td>${name}</td>
      <td>${email}</td>
    </tr>
    `
  );
  });
}

// Search functionality
document.getElementById("search").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchText) || 
    user.email.toLowerCase().includes(searchText)
  );

  displayUsers(filteredUsers);
});


//create user functionality

document.getElementById("addUser").addEventListener("click", () => {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Created User:", data);
    alert("User Created Successfully!");
  })
  .catch(error => console.error(error));
});