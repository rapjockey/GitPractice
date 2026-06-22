let editId = null;
let userData = [];

let currentPage = 1;
const rowsPerPage = 5;
let totalPages ;


let selectedCity = "";
let selectedDepartment = "";
let sortOrder = "";

// Fetch Users with API Pagination
async function fetchUsers() {
    try {

        let url =
            `http://localhost:3000/users?_page=${currentPage}&_per_page=${rowsPerPage}`;

        if (selectedCity) {
            url += `&city=${selectedCity}`;
        }

        if (selectedDepartment) {
            url += `&department=${selectedDepartment}`;
        }
           // Add sorting
        if (sortOrder === "asc") {
        url += `&_sort=name&_order=asc`;
    }

        if (sortOrder === "desc") {
        url += `&_sort=name&_order=desc`;
    }
    console.log(url)

        const response = await fetch(url);

        const result = await response.json();


      

        userData = result.data;
        totalPages = result.pages;


       // Sort Current Page Data
        // if (sortOrder === "asc") {
        //     userData.sort((a, b) =>
        //         a.userData.name.localeCompare(b.userData.name)
        //     );
        // }

        // if (sortOrder === "desc") {
        //     userData.sort((a, b) =>
        //         b.userData.name.localeCompare(a.userData.name)
        //     );
        // }
      
        showUsers(userData);

        document.getElementById("pageNumber").textContent =
            `${currentPage} / ${totalPages}`;

    } catch (error) {
        console.error("Error:", error);
    }
}


fetchUsers();

// Display Users
function showUsers(userData) {
    const userList = document.getElementById("tableData");

    if (!userList) return;

    userList.innerHTML = "";

    userData.forEach(user => {
        userList.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.Username}</td>
                <td>${user.city}</td>
                <td>${user.department}</td>
                <td>${user.number}</td>
                <td>
                    <button onclick="editUser('${user.id}')">
                        Edit
                    </button>

                    <button onclick="deleteUser('${user.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Save user id in localStorage
function editUser(id) {
    localStorage.setItem("editUserId", id);
    window.location.href = "update.html";
}

// Delete User
async function deleteUser(id) {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        });

        fetchUsers();

    } catch (error) {
        console.error("Delete Error:", error);
    }
}

// Search Filter
document.getElementById("search-text")
.addEventListener("input", function () {

    const inputText = this.value.toLowerCase();

    const filterData = userData.filter(user => {
        return user.name
            .toLowerCase()
            .includes(inputText);
    });

    if (filterData.length === 0) {
        alert("User is not found");
    }

    showUsers(filterData);
});

// Previous Page
document.getElementById("prevBtn")
.addEventListener("click", async () => {

    if (currentPage > 1) {
        currentPage--;
        await fetchUsers();
    }
});

// Next Page
document.getElementById("nextBtn")
.addEventListener("click", async () => {

    if (currentPage < totalPages) {
        currentPage++;
        await fetchUsers();
    }
});

// Filter by City
document.getElementById("cityFilter")
.addEventListener("change", function () {

    selectedCity = this.value;

    currentPage = 1;

    fetchUsers();
});

// Filter by Department
document.getElementById("DepartmentFilter")
.addEventListener("change", function () {

    selectedDepartment = this.value;

    currentPage = 1;

    fetchUsers();
});

 //assending and decending
document.getElementById("sortName")
.addEventListener("change", function () {

    sortOrder = this.value;

    currentPage = 1;

    fetchUsers();
console.log(sortOrder);

});