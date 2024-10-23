const initialMenuItems = [  
    {    
        "id": "1", 
        "filter": "filter-coffee",    
        "image": "../assets/images/longblack.jpg",    
        "title": "Long Black",    
        "price": "RM10.00",    
        "detailsLink": "portfolio-details.html"  
    },  
    
    {    
        "id": "2", 
        "filter": "filter-coffee",    
        "image": "../assets/images/spanishlatte.jpg",    
        "title": "Spanish Latte",   
        "price":  "RM13.90",  
        "detailsLink": "portfolio-details.html"  
    },  
    
    {    
        "id": "3", 
        "filter": "filter-coffee",    
        "image": "../assets/images/americano.jpg",    
        "title": "Americano",    
        "price":  "RM12.90", 
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "4", 
        "filter": "filter-coffee",    
        "image": "../assets/images/latte.jpg",    
        "title": "Coffee Latte",    
        "price": "RM11.90", 
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "5", 
        "filter": "filter-soft",    
        "image": "../assets/images/summer.jpg",    
        "title": "Special Summer",    
        "price":  "RM12.90",
        "detailsLink": "portfolio-details.html"  
    },
     
    {    
        "id": "6", 
        "filter": "filter-soft",    
        "image": "../assets/images/freashingmangofly.jpg",    
        "title": "Freshing Mango Fly",    
        "price":  "RM15.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "7", 
        "filter": "filter-pasta",    
        "image": "../assets/images/tomatopasta.jpg",    
        "title": "Tomato Pasta",    
        "price":  "RM15.90",
        "detailsLink": "portfolio-details.html"  
    },
     
    {    
        "id": "8", 
        "filter": "filter-pasta",    
        "image": "../assets/images/pennebasilpestopasta.jpg",    
        "title": "Penne Basil Pesto Pasta",    
        "price":  "RM21.90",
        "detailsLink": "portfolio-details.html"  
    },
     
    {    
        "id": "9", 
        "filter": "filter-pasta",    
        "image": "../assets/images/seafoodpasta.jpg",    
        "title": "Seafood Pasta",    
        "price":  "RM19.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "10", 
        "filter": "filter-western",    
        "image": "../assets/images/beefburger.jpg",    
        "title": "Beef Burger",    
        "price":  "RM19.90",
        "detailsLink": "portfolio-details.html"  
    },
   
    {    
        "id": "11", 
        "filter": "filter-western",    
        "image": "../assets/images/bigbreakfastplatter.jpg",    
        "title": "Big Breakfast Platter",    
        "price":  "RM22.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "12", 
        "filter": "filter-dessert",    
        "image": "../assets/images/cheeese.jpg",    
        "title": "Blueberry Cheese Cake",    
        "price":  "RM22.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "13", 
        "filter": "filter-dessert",    
        "image": "../assets/images/matcha.jpg",    
        "title": "Strawberry Matcha Cake",    
        "price":  "RM22.90",
        "detailsLink": "portfolio-details.html"  
    }, 
    
    {    
        "id": "14", 
        "filter": "filter-dessert",    
        "image": "../assets/images/frenchtoastbriocheloaf.jpg",    
        "title": "French Brioche Loaf",    
        "price":  "RM20.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "15", 
        "filter": "filter-dessert",    
        "image": "../assets/images/ampangbalikcroffle.jpg",    
        "title": "Ampangbalik Croffle",    
        "price":  "RM18.90",
        "detailsLink": "portfolio-details.html"  
    },
    
    {    
        "id": "16", 
        "filter": "filter-snack",    
        "image": "../assets/images/popcornchicken.jpg",    
        "title": "Popcorn Chicken",    
        "price":  "RM11.90",
        "detailsLink": "portfolio-details.html"  
    }
    ]

let tax = 0;
let totalPrice = 0;
   

function fetchJSONData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Fetch as text
      })
      .then((text) => {
        // Parse the text as JSON
        return JSON.parse(text);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error
        );
      });
  }

  

  // Function to create product items from JSON data
  function createProductItems() {
    const container = document.getElementById("product-container");
    initialMenuItems.forEach((item) => {

      const productItem = document.createElement("div");
      productItem.className = `col-lg-3 col-md-6 isotope-item ${item.filter}`;
      productItem.innerHTML = `
    <div class="product-item">
      <img src="${item.image}" class="img-fluid" alt="${item.title}">
      <div class="product-info">
        <div class="d-flex flex-row align-items-center">
        <h4>${item.title}</h4>
        <a href="${item.image}" title="${item.title}" data-gallery="product-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in" style="font-size:20px;margin-left:10px"></i></a>
        </div>
        <p>${item.price}</p>
        
        <a onclick="addToCart('${item.id}')" class="details-link">
        <i class="bi bi-cart cart" style="font-size:24px;color:black"></i>
        <i class="bi bi-cart-fill" style="font-size:24px;color:black"></i>
    </a>
    
      </div>
      </div>
    `;
      container.appendChild(productItem);
    });
  }

  function attachFilterListeners(isotopeItem) {
    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        // Your filter logic here
      });
    });
  }

  function attachFilterListeners(){
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    
        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });
    
        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
    
      });
  }

  
  var initialCart = [];
// Function to save the initialCart array to local storage
function saveInitialCartToLocalStorage() {
    localStorage.setItem('initialCart', JSON.stringify(initialCart));

}

// Function to load the initialCart array from local storage
function loadInitialCartFromLocalStorage() {
    const initialCartJSON = localStorage.getItem('initialCart');
    
    if (initialCartJSON) {
        initialCart = JSON.parse(initialCartJSON);
    }

}

// Call the function to load the initialCart array from local storage when the page loads
window.addEventListener('load', function() {
    loadInitialCartFromLocalStorage();
    populateCartItems(); // Populate cart items after loading from local storage
    updateCartCount();
    displayInitialCart(); // Display initial cart items after loading from local storage
});
 // Function to update the cart count display
function updateCartCount() {
    if(document.getElementById("cart-count")){
    document.getElementById("cart-count").textContent = initialCart.length;
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    if (initialCart.length === 0) {
        // If initial cart is empty, display a message
        cartItemsContainer.innerHTML = `
        <tr>
        <td colspan='5' class='text-center'>
            <img src='../assets/emptyCart.jpg' alt='Empty Cart Image' style="width:60%;height:60%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"> <!-- Added border-radius and box-shadow for a more aesthetic appearance -->
            <h3 style="margin-top: 20px; color: #555;">No items in the cart</h3> <!-- Adjusted margin-top and color of the text -->
        </td>
    </tr>`;
    }
}
}

function populateCartItems() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
     if(cartItemsContainer){
    cartItemsContainer.innerHTML = ""; // Clear previous items

    initialCart.forEach(item => {
        // Extracting the numeric value from the price string (assuming the format is "RM10.00")
        const priceNumeric = parseFloat(item.price.replace("RM", ""));

        // Create a table row element for each item
        const cartItemElement = document.createElement("tr");

        // Calculate initial subtotal
        const initialSubTotal = item.quantity * priceNumeric;

        // Set inner HTML of the cart item element
        cartItemElement.innerHTML = `
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 90px;border-radius: 10px">
                    <div class="ms-3">
                        <p class="fw-bold mb-1">${item.title}</p>
                        <p class="text-muted mb-0">${item.title}</p>
                    </div>
                </div>
            </td>
            <td>
                <p class="fw-normal mb-1">${item.price}</p>
            </td>
            <td>
                <div class="input-group quantity-group d-flex align-items-center">
                    <div class="decrementBtn d-flex justify-content-center align-items-center px-3 py-1" style="border-radius:10px;width:25px;border:1px solid #ccc" type="button"><i class="bi bi-dash" style="-webkit-text-stroke: 1px;"></i></div>
                    <span class="badge badge-success rounded-pill d-inline text-black quantity mx-2">${item.quantity}</span>
                    <div class="incrementBtn d-flex justify-content-center align-items-center px-3 py-1" style="border-radius:10px;width:25px;border:1px solid #ccc" type="button"><i class="bi bi-plus" style="-webkit-text-stroke: 1px;"></i></div>
                </div>
            </td>
            <td id="finalPrice" class="subtotal">RM${initialSubTotal.toFixed(2)}</td>
            <td>
                <div class="removeBtn"><i class="bi bi-trash-fill"></i></div>
            </td>
        `;
        
        
        // Append the item element to the cart items container
        cartItemsContainer.appendChild(cartItemElement);

        // Get the quantity element and attach an event listener to update subtotal on quantity change
        const quantityElement = cartItemElement.querySelector('.quantity');
        quantityElement.addEventListener('input', function() {
            const newQuantity = parseInt(this.textContent);
            updateSubtotal(cartItemElement, newQuantity, priceNumeric);
        });

        // Get the increment and decrement buttons and attach event listeners
        const incrementButton = cartItemElement.querySelector('.incrementBtn');
        const decrementButton = cartItemElement.querySelector('.decrementBtn');
        
        incrementButton.addEventListener('click', function() {
            const currentQuantity = parseInt(quantityElement.textContent);
            const newQuantity = currentQuantity + 1;
            quantityElement.textContent = newQuantity;
            updateCartItemQuantity(item, newQuantity);
            updateSubtotal(cartItemElement, newQuantity, priceNumeric);
            change();
        });
        
        decrementButton.addEventListener('click', function() {
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                const newQuantity = currentQuantity - 1;
                quantityElement.textContent = newQuantity;
                updateCartItemQuantity(item, newQuantity);
                updateSubtotal(cartItemElement, newQuantity, priceNumeric);
                change();
            }
        });
        
        function updateCartItemQuantity(item, newQuantity) {
            // Update the quantity of the item in the initialCart array
            const index = initialCart.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                initialCart[index].quantity = newQuantity;
            }
        }
        
        function updateSubtotal(cartItemElement, quantity, priceNumeric) {
            // Update the subtotal for the specific cart item
            const subtotal = quantity * priceNumeric;
            const subtotalElement = cartItemElement.querySelector('.subtotal');
            subtotalElement.textContent = `RM${subtotal.toFixed(2)}`;
            // Recalculate the total price or call the function to recalculate the total price
        }
        

      // Get the remove button and attach an event listener to remove the item from the cart
const removeButton = cartItemElement.querySelector('.removeBtn');
removeButton.addEventListener('click', function() {
    // Find the index of the item in the initialCart array
    const index = initialCart.findIndex(cartItem => cartItem.id === item.id);

    // Remove the item from the initialCart array
    if (index !== -1) {
        initialCart.splice(index, 1);
        change();
        updateCartCount();
    }

    // Add a class to trigger the fade-out animation
    cartItemElement.classList.add('fade-out');

    // Wait for the animation to finish before removing the item from the DOM
    cartItemElement.addEventListener('animationend', function() {
        // Remove the item from the cart
        cartItemsContainer.removeChild(cartItemElement);
    });
});
    });
    change();
    saveInitialCartToLocalStorage();
}
}

// Function to add an item to the cart
function addToCart(itemId) {
    const selectedItem = initialMenuItems.find(item => item.id === itemId);
    
    if (selectedItem) {
        const existingCartItemIndex = initialCart.findIndex(item => item.id === itemId);
        if (existingCartItemIndex !== -1) {
            // Item with the same ID already exists in the cart
            // Increase its quantity by 1
            initialCart[existingCartItemIndex].quantity += 1;
        } else {
            // Add the new item to the cart with a default quantity of 1
            selectedItem.quantity = 1;
            initialCart.push(selectedItem);
        }
        console.log("Item added to cart:", initialCart);
        updateCartCount();
        populateCartItems();
        showSuccessMessage(selectedItem.title);
    } else {
        console.error("Item not found with id:", itemId);
    }
}

 // Function to show the success message
 function showSuccessMessage(itemTitle) {
    var container = document.getElementById('successAlertContainer');
    
    // Create a new alert div
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success position-relative d-flex align-items-center';
    alertDiv.style.backgroundColor = '#F0F9EB';
    alertDiv.style.color = '#67C23A';
    alertDiv.style.display = 'none';
    alertDiv.innerHTML = `
    <div><i class="bi bi-check-circle-fill me-3" style="color:#67C23A;"></i></div>
    Item "<strong>${itemTitle}</strong>" added to cart.
        <button type="button" class="btn-close ms-2" style="  
        font-size: 0.7rem; 
        width: 1.5rem; 
        height: 1.5rem;" onclick="removeAlert(this)"></button>`;
    
    // Add the alert div to the container
    container.appendChild(alertDiv);

    // Show the alert div with an easing effect
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.6s ease';
    alertDiv.style.display = 'block';
    setTimeout(function() {
        alertDiv.style.opacity = '1';
    }, 100);

    // Hide the alert div after 3 seconds
    setTimeout(function() {
        alertDiv.style.opacity = '0';
        setTimeout(function() {
            container.removeChild(alertDiv);
        }, 500); // Wait for the fade-out transition to complete before removing the div
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Function to remove the alert div
function removeAlert(button) {
    var alertDiv = button.parentElement;
    alertDiv.style.opacity = '0';
    setTimeout(function() {
        alertDiv.parentElement.removeChild(alertDiv);
    }, 500); // Wait for the fade-out transition to complete before removing the div
}

// Function to display initialCart content inside the #order-items-section
function displayInitialCart() {
    const orderItemsSection = document.getElementById("order-items-section");
    orderItemsSection.innerHTML = ""; // Clear previous items

    initialCart.forEach(item => {
        // Create a div element for each item
        const cartItemElement = document.createElement("div");
        cartItemElement.className = "order-item";

        // Set inner HTML of the cart item element
        cartItemElement.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
        <img src="${item.image}" alt="${item.title}" style="width: 70px; height: 60px; border-radius: 10px;">
        <div class="ms-3 d-flex flex-grow-1">
            <p class="fw-normal mb-1">${item.title}</p>
           
        </div>
        <div class="ms-3 d-flex flex-grow-1">
        <p class="fw-normal mb-1">Qty: ${item.quantity}</p>
       
    </div>
       
        <div class="ms-3 fw-bold">RM${(item.quantity * parseFloat(item.price.replace("RM", ""))).toFixed(2)}</div>
    </div>
    
        `;

        // Append the item element to the order items section
        orderItemsSection.appendChild(cartItemElement);
    });
    change();

}


function change(){
  // Calculate the total price based on all the cart items
  let subtotal = 0;
  initialCart.forEach(item => {
      const priceNumeric = parseFloat(item.price.replace("RM", ""));
      subtotal += item.quantity * priceNumeric;
  });

  // Update the subtotal element in the DOM
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = `RM${subtotal.toFixed(2)}`;

  // Calculate the tax
    tax = subtotal * 0.06;

  // Update the tax element in the DOM
  const taxElement = document.getElementById('tax');
  taxElement.textContent = `RM${tax.toFixed(2)}`;

  // Calculate the total price (subtotal + tax)
   totalPrice = subtotal + tax;

  // Update the total price element in the DOM
  const totalElement = document.getElementById('totalPrice');
  totalElement.textContent = `RM${totalPrice.toFixed(2)}`;
  saveInitialCartToLocalStorage();
}

    
document.getElementById('cart-icon').addEventListener('click', function() {
    // Check if the initial cart is empty
    const summary = document.getElementById("SummaryOrder");
   
    if (initialCart.length === 0) {
        // If initial cart is empty, show a message or perform any desired action
        const cartItemsContainer = document.getElementById("cartItemsContainer");
        summary.style.display = "none";
        cartItemsContainer.innerHTML = `
        <tr>
        <td colspan='5' class='text-center'>
            <img src='../assets/emptyCart.jpg' alt='Empty Cart Image' style="width:60%;height:60%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"> <!-- Added border-radius and box-shadow for a more aesthetic appearance -->
            <h3 style="margin-top: 20px; color: #555;">No items in the cart</h3> <!-- Adjusted margin-top and color of the text -->
        </td>
    </tr>`;
        var myModal = new bootstrap.Modal(document.getElementById('cartModal'));
        myModal.show();
    } else {
        summary.style.display = "inline";
        // If initial cart is not empty, open the cart modal
        var myModal = new bootstrap.Modal(document.getElementById('cartModal'));
        myModal.show();
    }
});

//   // Fetch JSON data and create product items
//   fetchJSONData("../data.txt").then((data) => {
//     createProductItems(data);
//     attachFilterListeners();
//   });

createProductItems();
attachFilterListeners();

function goBack() {
    window.history.back();
}
  