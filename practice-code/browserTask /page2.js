let getValue = localStorage.getItem("Add Value");
console.log(getValue);
document.getElementById("getValue").textContent = getValue;


document.getElementById("removeBtn").addEventListener("click", () => {
    localStorage.removeItem("Add Value");
    location.reload();
})
