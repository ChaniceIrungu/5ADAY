import React, { Component } from "react";
import "./App.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      price: " ",

      products: [],
    };
  }
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch(`/products`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ products: response });
      });
  };
  // // I want to return the products if they exist in db otherwis return an empty array. I dont know how to do this
  //I also want to store the items of the cart if they exist
  // getCarts = () => {
  //   fetch(`/Carts`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({ carts: response });
  //     });
  // };
  // onInputChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // getBagButtons = () => {
  //   const buttons = [...document.querySelectorAll(".bag-btn")];
  //   buttonsDOM = buttons;
  //   buttons.forEach = (button) => {
  //     let id = button.dataset.id;
  //     let inCart = cart.find((item) => item.id === id);
  //     if (inCart) {
  //       button.innerText = "In cart";
  //       button.disabled = true; //if button is in cart disable
  //     }
  //   };
  // };

  // //method for
  // setCartValues = (cart) => {
  //   let tempTotal = 0;
  //   let itemsTotal = 0;
  //   //items are already added to cart
  //   cart.map((item) => {
  //     tempTotal += item.price * amount;
  //     itemsTotal += itemds.amount;
  //   });
  //   cartTotal.innerText = parseFloat(tempTotal.toFixed(2)); //to decimals
  //   cartItems.innerText = itemsTotal;
  // };

  render() {
    const { image, title, price, products } = this.state;
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-center">
            <span className="nav-icon">
              <i className="fas fa-bars"></i>
            </span>
            <div classNameName="cart-btn">
              <span className="nav-icon">
                <i className="fas fa-cart-plus"></i>
              </span>
              <div className="cart-items">0</div>
            </div>
          </div>
        </nav>
        <header className="hero">
          <div className="banner">
            <h1 className="banner-title"> groceries collection</h1>
            <button className="banner-btn">Shop Now</button>
          </div>
        </header>
        <section className="products">
          <div className="section-title">
            <h2>groceries list</h2>
          </div>
          <div className="products-center">
            <article className="product">
              {products.map((product) => (
                <div>
                  <div className="img-container">
                    <img
                      src={product.image}
                      alt="product"
                      className="product-img"
                    ></img>
                    <button className="bag-btn" data-id="1">
                      <i className="fas fa-shopping-cart"></i>
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
        <div className="className-overlay">
          <div className="cart">
            <span className="close-cart">
              <i className="fas fa-window-close"></i>
            </span>
            <h2>your cart</h2>
            <div className="cart-content">
              <div className="cart-item">
                <img src="./orange.jpg" alt="product"></img>
                <div>
                  <h4>juicy orange</h4>
                  <h5>$5</h5>
                  <span className="remove-item">remove</span>
                </div>
                <div>
                  <i className="fas fa-chevron-up"></i>
                  <p className="item-amount">1</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
              {/* <!-- end of cart item --> */}
            </div>
            <div className="cart-footer">
              <h3>
                your total:$ <span className="cart-total">0</span>{" "}
              </h3>
              <button className="clear-cart banner-btn">clear cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingList;
