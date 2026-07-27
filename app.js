let cart = document.querySelector(".cart");
let cartIcon = document.getElementById("cart-icon");
let closeCart = document.getElementById("close-cart");

let addCart = document.querySelectorAll(".add-cart");
let cartContent = document.querySelector(".cart-content");
let total = document.querySelector(".total h3");
let count = document.getElementById("count");

let totalPrice = 0;
let itemCount = 0;

// Open Cart
cartIcon.addEventListener("click", function () {
    cart.classList.add("active");
});

// Close Cart
closeCart.addEventListener("click", function () {
    cart.classList.remove("active");
});

// Add To Cart
addCart.forEach(function (button) {

    button.addEventListener("click", function () {

        let product = button.parentElement.parentElement;

        let name = product.querySelector("h3").innerText;
        let price = product.querySelector("span").innerText;

        let item = document.createElement("div");

        item.innerHTML =
        "<p>" + name + " - " + price + "</p>";

        cartContent.appendChild(item);

        itemCount++;
        count.innerText = itemCount;

        totalPrice += Number(price.replace("$", ""));
        total.innerText = "Total: $" + totalPrice;

    });

});