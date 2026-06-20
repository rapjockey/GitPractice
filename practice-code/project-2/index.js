let editId = null;
let userData = [];


const DATA_URL = fetch('http://localhost:3000/users')
.then(res=>(res.json()))
.then(users => {
    userData = users;
    showUsers(userData);
})

let currentPage = 1;
const rowsPerPage = 5;

function showUsers (userData) {
    const userList =  document.getElementById("tableData");
    if(!userList) return;
    userList.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    

    const paginatedUsers = userData.slice(start, end);

    paginatedUsers.forEach(user => {
        
        userList.innerHTML += 
        `
            <tr>
                <td>${user.userData.name}</td>
                <td>${user.userData.Username}</td>
                <td>${user.userData.city}</td>
                <td>${user.userData.department}</td>
                <td>${user.userData.number}</td>
                <td>
                   <button onclick="editUser('${user.id}')">Edit</button>
                    <button onclick="deleteUser('${user.id}')">Delete</button>
                </td>
            </tr>
        `
    }
)
}

//save in localStorage user id
function editUser(id) {

    localStorage.setItem("editUserId", id);

    window.location.href = "update.html";
}


//DeleteUser 
function deleteUser(id){
    fetch(`http://localhost:3000/users/${id}`, {
        method : "DELETE"
    })
    location.reload();
    
}


//filter user
document.getElementById("search-text").addEventListener("input",function (){
  const inputText = this.value.toLowerCase();
 const filterData  = userData.filter(user => {
     return user.userData.name.toLowerCase().includes(inputText);
   })
   if(!filterData){
    alert("User is not found");
   }
    showUsers(filterData);

})

document.getElementById("prevBtn")
.addEventListener("click", () => {

    if (currentPage > 1) {
        currentPage--;
        showUsers(userData);

        document.getElementById("pageNumber")
        .textContent = currentPage;
    }
});


document.getElementById("nextBtn")
.addEventListener("click", () => {

    const totalPages =
        Math.ceil(userData.length / rowsPerPage);

    if (currentPage < totalPages) {

        currentPage++;

        showUsers(userData);

        document.getElementById("pageNumber")
        .textContent = currentPage;
    }
});


//filter by city

document.getElementById("cityFilter")
.addEventListener("change", function() {

    const selectedCity = this.value;

    if(selectedCity === "") {
        showUsers(userData);
        return;
    }

    const filteredUsers = userData.filter(user =>
        user.userData.city === selectedCity
    );

    showUsers(filteredUsers);
});


// filter By department

document.getElementById("DepartmentFilter").addEventListener("change",function (){
    const FilterDep = this.value;
    console.log(FilterDep)

    if(FilterDep == ""){
        showUsers(userData);
        return;
    }

    const filterDep = userData.filter(user => 
        user.userData.department === FilterDep
    );
    showUsers(filterDep);
});