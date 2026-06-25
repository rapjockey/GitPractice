
document.getElementById("btn").addEventListener("click", () => {
let x =10;

localStorage.setItem("Add Value",x);
window.location.href = "page2.html";

})

document.cookie = "username=rahul; max-age=2";
console.log(document.cookie);


const btn = document.getElementById("themeBtn");

if (sessionStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        sessionStorage.setItem("theme","dark");
        btn.textContent = "dark"
    }
    else{
        sessionStorage.setItem("theme","light");
        btn.textContent = "light"
         
    }
})



//recently visited page

function visitPage(pageName){
    let pages = localStorage.getItem("pages");

    if(pages) {
        pages =  pages.split(",");
    }
    else{
        pages = [];
    }
    pages = pages.filter(page=> page !== pageName);
    pages.unshift(pageName);

    localStorage.setItem("pages",pages);

    showPages();
}
function showPages(){
    let pages = localStorage.getItem("pages");
    if(!pages){
        return;
    }
   
    document.getElementById("result").textContent = pages.split(",");
    // localStorage.clear();
    // localStorage.removeItem("pages") 
}
showPages();

// Conter 

let count =localStorage.getItem("count") || 0;


const countElement = document.getElementById("count");
countElement.textContent = count;


 function updateValue (){
countElement.textContent = count;
localStorage.setItem("count",count);

 }

document.getElementById("increase").addEventListener("click", () => {
    count++;
      updateValue ()


})
document.getElementById("decrease").addEventListener("click", () => {
if(count > 0){
    count--;
}
    updateValue ()

})
document.getElementById("reset").addEventListener("click", () => {
    count = 0
    updateValue ()

})


// Cart Simulation

function addToCart(name,price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name : name,
        price:price
    });

    localStorage.setItem(
        "cart",JSON.stringify(cart)
    );

    showCart();

}
function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let html = "";
    let total = 0;

    cart.forEach((item,index) => {
        html += `
            <p>
            
            ${item.name} - ${item.price}
            <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
        total += item.price;
    })
    

    if(cart.length === 0){
        html ="cart is empty";
    }
    document.getElementById("cart").innerHTML = html;

    document.getElementById("total").textContent = `Total : ${total}`;

}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    )
    showCart();

}
function clearCart() {

    localStorage.removeItem("cart");

    showCart();
}

showCart();
