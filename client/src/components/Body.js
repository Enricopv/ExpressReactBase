import React, { Component } from 'react';
import './Body.css';
import ShopifyBuy from 'shopify-buy';
import envify from 'envify';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartid: ""
    }
  }


  componentDidMount() {
    // Initialize connection
    const shopClient = ShopifyBuy.buildClient({
      accessToken: process.env.REACT_APP_SHOPIFY_API_KEY,
      appId: process.env.REACT_APP_SHOPIFY_APP_ID,
      domain: process.env.REACT_APP_SHOPIFY_DOMAIN           
    });

    // Initialize cart
    shopClient.createCart().then(cart => {
      console.log(cart.id);
      this.setState({
        cartid: cart.id
      })      
    })    

    shopClient.fetchProduct('10155097092')
      .then(product => {
          // cart
          var cartdiv = document.querySelector('#cart');
          cartdiv.innerHTML = '<button>cart</button>';
          cartdiv.addEventListener('click', event => {  
            shopClient.fetchCart(this.state.cartid).then(cart => {
              console.log(product);
              cart.createLineItemsFromVariants({variant: product.attrs.variants[1], quantity: 1}).then(cart => {
                console.log(cart.checkoutUrl);
                //window.open(cart.checkoutUrl);
              })
            })
          })

          // checkout
          var checkoutdiv = document.querySelector('#checkout');
          checkoutdiv.innerHTML = '<button>Checkout</button>';
          checkoutdiv.addEventListener('click', event => {
            shopClient.fetchCart(this.state.cartid).then(cart => {
              // window.location.href = product.selectedVariant.checkoutUrl(1);
              console.log(product.selectedVariant.checkoutUrl(1));
              console.log(cart.checkoutUrl);
                
            });
           
          })
        }
      )
      .catch (error => {
          console.log(error);
        }
      );

      
  }  


  render() {
    return (
      <div className="Body">
        <p className="Body-intro">
          To get started, edit <code>src/Body.js</code> and save to reload.
        </p>
        <div id="cart"></div>
        <div id="checkout"></div>
      </div>
    );
  }
}

  

export default Body;
