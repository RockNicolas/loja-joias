function toggleCart() {
    var cartModal = document.getElementById("cartModal");
    cartModal.style.display = (cartModal.style.display === "flex") ? "none" : "flex";
  }
  
  function addItemToCart(itemName, itemPrice) {
    var cartItemsList = document.getElementById("cartItems");
    var newItem = document.createElement("li");
    newItem.innerHTML = itemName + " - R$ " + itemPrice + " <button class='remove-item' onclick='removeItem(this)'>Remover</button>";
    
    cartItemsList.appendChild(newItem);
    
    updateCart();
  }
  
  function updateCart() {
    var cartItems = document.getElementById("cartItems").getElementsByTagName("li");
    var total = 0;
    
    for (var i = 0; i < cartItems.length; i++) {
      var priceText = cartItems[i].textContent.split(" - ")[1].split(" ")[1];
      total += parseFloat(priceText.replace(",", "."));
    }
    
    document.getElementById("total").textContent = "R$ " + total.toFixed(2);
    document.getElementById("cart-count").textContent = cartItems.length;
  }
  
  function removeItem(button) {
    var item = button.parentElement;
    item.remove();
    
    updateCart();
  }
  
  function finalizePurchase() {
    alert("Compra finalizada!");
    document.getElementById("cartItems").innerHTML = ""; 
    updateCart(); 
  }
  