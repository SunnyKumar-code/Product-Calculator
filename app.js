let products = document.querySelector("#products");
let submit = document.querySelector("#submit");
let cart = document.querySelector("#cart");
let total = document.querySelector("#total");
let none = document.querySelector("#none");
let totalcost = 0;
total.textContent = `${totalcost}`
submit.addEventListener("click", function(event) {
    event.preventDefault();
    none.style.display="none";
    let product = document.querySelector("#product");
    let price = document.querySelector("#price");
    if (product.value === "" || price.value === "") {
        alert("Please enter both product and price");
        return;
    }

    // Create new elements for the new product and its details

    let newProduct = document.createElement("li");
    newProduct.classList.add("product");
    let item = document.createElement("p");
    item.classList.add("item");
    item.textContent = product.value;
    let newPrice = document.createElement("p");
    newPrice.classList.add("price");
    newPrice.textContent = price.value;
    let quantity = document.createElement("div");
    quantity.classList.add("quantity");
    let sub = document.createElement("p");
    sub.classList.add("sub");
    sub.textContent = "-";
    let count = document.createElement("p");
    count.classList.add("count");
    count.textContent = 1;
    let add = document.createElement("p");
    add.classList.add("add");
    add.textContent = "+";

    // Append the new elements to the existing list
    
    products.appendChild(newProduct);
    newProduct.appendChild(item);
    newProduct.appendChild(newPrice);
    newProduct.appendChild(quantity);
    quantity.appendChild(sub);
    quantity.appendChild(count);
    quantity.appendChild(add);
    // Clear the input fields
    
    let cartList = document.createElement("li");
    cartList.classList.add("cart-list");
    
    let productCart = document.createElement("p");
    productCart.textContent = product.value;

    let priceCart = document.createElement("p");
    priceCart.classList.add("price-cart");
    priceCart.textContent = `${price.value} X ${count.textContent} `;

    cart.appendChild(cartList);
    cartList.appendChild(productCart);
    cartList.appendChild(priceCart);
    
     let productprice = parseInt(price.value);  
     totalcost +=productprice;
     total.textContent = totalcost;
    add.addEventListener("click", function() {
        totalcost += productprice;
        let currentCount = parseInt(count.textContent);
        count.textContent = currentCount + 1;
        total.textContent =totalcost;
    });
  
    // Event listener to decrement the quantity or remove the product if count is 0
    sub.addEventListener("click", function() {
        totalcost -= productprice;
        if(totalcost===0){
            none.style.display="block";
        }
        let currentCount = parseInt(count.textContent);
        total.textContent = totalcost;
        if (currentCount > 1) {
            count.textContent = currentCount - 1;
        } else {
            products.removeChild(newProduct);
            cart.removeChild(cartList);
        }
    });
    
    product.value = "";
    price.value = "";
});