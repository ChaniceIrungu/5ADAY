const cartBtn = document.querySelector(".cart-btn");
const CloseCartBtn = document.querySelector(".close-cart");
const ClearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productDOM = document.querySelector(".products-center");

//cart
let cart = [];
//buttons
let buttonsDOM = [];

//getting product
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.js");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//displau products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <article class="product">
        <div class="img-container">
          <img src={image} alt="product" class="product-img"></img>
          <button class="bag-btn" data-id={id}>
            <i class="fas fa-shopping-cart"></i>
            add to bag
          </button>
        </div>
        <h3>{title}</h3>
        <h4>{price}</h4>
      </article>`;
    });
    productDOM.innerHTML = result;
  }
  getBagButtons() {
    const buttons = [...document.querySelectorAll(".bag-btn")];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "In cart";
        button.disabled = true; //if button is in cart disable
      }

      button.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        //get the product from products
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        //add product to cart
        cart = [...cart, cartItem];
        //save cart in local storage
        Storage.saveCart(cart);
        //set cart values
        this.setCartValues(cart);
        //dispaly cart items
        this.addCartItem(cartItem);
        //show the cart
        this.showCart();
      });
    });
  }
  //method for
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    //items are already added to cart
    cart.map((item) => {
      tempTotal += item.price * amount;
      itemsTotal += itemds.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2)); //to decimals
    cartItems.innerText = itemsTotal;
  }
  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<img src={image} alt="product"></img>
    <div>
      <h4>{title}</h4>
      <h5>{{price}}</h5>
      <span class="remove-item"//data-id={item.id} item>remove</span>
    </div>
    <div>
      <i class="fas fa-chevron-up" data-id={item.id}></i>
      <p class="item-amount" >${item.amount}</p>
      <i class="fas fa-chevron-down" data-id={item.id}></i>
    </div>`;
    //THEN print cartContent div
  }
  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }
  //assign values to cart array
  setupApp() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this, populate(cart);
    cartBtn.addEventListener("click", this, this.showCart);
  }
  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
}
// local Storage- storing storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products".JSON.stringyfy(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem("cart".JSON.stringyfy(cart));
  }
  static getCart(cart) {
    //? if this is true...item in the cart
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  // setup app ..call method
  ui.setupApp();

  //get all products
  products
    .getProducts()
    .THEN((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .THEN(() => {
      ui.getBagButtons();
    });
});
