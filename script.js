let cartList = []; // this is our empty array for the items

const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQuantityInput = document.getElementById('product-quantity');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

 
let totalPrice = 0;

// Our button fuctionalities

addProductButton.addEventListener("click", function () {
  let productName = productNameInput.value;
  let productPrice = productPriceInput.value;
  let productQuantity = productQuantityInput.value;
  let productTotal = productPrice * productQuantity;
 

  let errorMessage = document.getElementById("ErrorMessage");

  errorMessage.innerText = "";


  if (productName === "") {
    errorMessage.innerText = "Please enter Product Name.";
    return;
  }


  if (productQuantity === "") {
    errorMessage.innerText = "Please enter a Quantity.";
    return;
  }

  if (productQuantity.includes(".")) {
    errorMessage.innerText = "Please enter a whole number.";
    return;
  }
  
  if (productPrice === "") {
    errorMessage.innerText = "Please enter Product Price.";
    return;
  }
  
  //Check it is whole number and/or two decimal number
  let priceRegex = /^\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?$/;
  let checkPrice = priceRegex.test(productPrice);

  if (!checkPrice) {
    errorMessage.innerText = "Please enter valid Product Price.";
    return;
  }

  if (parseFloat(productPrice) <= 0) {
    errorMessage.innerText = "Please enter valid Product Price.";
    return;
  }


  let cartItem = {};
  cartItem.Name = productName;
  cartItem.Price = productPrice;
  cartItem.Quantity = productQuantity;
  cartItem.Total = productTotal;

  cartList.push(cartItem); // Add item to cart array

  DisplayItem(cartItem);
  updateTotalPrice(cartItem.Total);

  });

 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function DisplayItem(cartItem){
  //get the div
  // cart variable is the div

  //Display the header once the first cart item add
  if (cartList.length == 1){
    let elementListItem = document.createElement("li");
    elementListItem.dataset.price = cartItem.Total;
    elementListItem.innerHTML = "<span class='itemColumn'></span>" + 
      "<span class='itemColumn'>" + "Name" + "</span>" +
      "<span class='itemColumn'>" + "Price" + "</span>" +
      "<span class='itemColumn'>" + "Quantity" + "</span>" +
      "<span class='itemColumn'>" + "Total" + "</span>";
        
    cart.appendChild(elementListItem); 

  }

// Design how the cart list show in li.  
  let elementListItem = document.createElement("li");
  elementListItem.dataset.price = cartItem.Total;
  elementListItem.innerHTML = "<span class='itemColumn'><button class='RemoveButton' onclick='removeItem(event)'>Remove</button></span>" + 
    "<span class='itemColumn'>" + cartItem.Name + "</span>" +
    "<span class='itemColumn'>$" + cartItem.Price + "</span>" +
    "<span class='itemColumn'> " + cartItem.Quantity + "</span>" +
    "<span class='itemColumn'> $" + cartItem.Total+ "</span>";

  // add the item to the div
  cart.appendChild(elementListItem); 

}
 


// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}