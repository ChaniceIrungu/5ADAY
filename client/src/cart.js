import React, { useState, useEffect } from "react";

export default function Cart(props) {
  const [products, setproducts] = useState([]);
  const [carts, setcarts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  getProducts = () => {
    fetch(`/products`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ products: response });
      });
  };
  // I want to return the products if they exist in db otherwis return an empty array. I dont know how to do this
  //I also want to store the items of the cart if they exist
  getCarts = () => {
    fetch(`/Carts`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ carts: response });
      });
  };
  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  getBagButtons = () => {
    const buttons = [...document.querySelectorAll(".bag-btn")];
    buttonsDOM = buttons;
    buttons.forEach = (button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "In cart";
        button.disabled = true; //if button is in cart disable
      }
    };
  };

  //method for
  setCartValues = (cart) => {
    let tempTotal = 0;
    let itemsTotal = 0;
    //items are already added to cart
    cart.map((item) => {
      tempTotal += item.price * amount;
      itemsTotal += itemds.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2)); //to decimals
    cartItems.innerText = itemsTotal;
  };

  return (
    <div>
      <nav class="navbar">
        <div class="navbar-center">
          <span class="nav-icon">
            <i class="fas fa-bars"></i>
          </span>
          <div class="cart-btn">
            <span class="nav-icon">
              <i class="fas fa-cart-plus"></i>
            </span>
            <div class="cart-items">0</div>
          </div>
        </div>
      </nav>
      <header class="hero">
        <div class="banner">
          <h1 class="banner-title"> groceries collection</h1>
          <button class="banner-btn">Shop Now</button>
        </div>
      </header>
      <section class="products">
        <div class="section-title">
          <h2>groceries list</h2>
        </div>
        <div class="products-center">
          <article class="product">
            {products.map((product) => (
              <div>
                <div class="img-container">
                  <img
                    src={product.image}
                    alt="product"
                    class="product-img"
                  ></img>
                  <button class="bag-btn" data-id="1">
                    <i class="fas fa-shopping-cart"></i>
                    add to cart
                  </button>
                </div>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
              </div>
            ))}
          </article>
        </div>
      </section>
      //cart
      <div class="class-overlay">
        <div class="cart">
          <span class="close-cart">
            <i class="fas fa-window-close"></i>
          </span>
          <h2>your cart</h2>
          <div class="cart-content">
            <div class="cart-item">
              <img src="./orange.jpg" alt="product"></img>
              <div>
                <h4>juicy orange</h4>
                <h5>$5</h5>
                <span class="remove-item">remove</span>
              </div>
              <div>
                <i class="fas fa-chevron-up"></i>
                <p class="item-amount">1</p>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            {/* <!-- end of cart item --> */}
          </div>
          <div class="cart-footer">
            <h3>
              your total:$ <span class="cart-total">0</span>{" "}
            </h3>
            <button class="clear-cart banner-btn">clear cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
