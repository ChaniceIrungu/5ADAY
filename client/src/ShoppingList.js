import React from "react";

export default function ShoppingList() {
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
            <div class="img-container">
              <img src="./apples.jpg" alt="product" class="product-img"></img>
              <button class="bag-btn" data-id="1">
                <i class="fas fa-shopping-cart"></i>
                add to bag
              </button>
            </div>
            <h3>juicy apples</h3>
            <h4>$1</h4>
          </article>
          <article class="product">
            <div class="img-container">
              <img src="./apples.jpg" alt="product" class="product-img"></img>
              <button class="bag-btn" data-id="1">
                <i class="fas fa-shopping-cart"></i>
                add to bag
              </button>
            </div>
            <h3>juicy apples</h3>
            <h4>$1</h4>
          </article>
        </div>
      </section>
      {/* cart */}
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
