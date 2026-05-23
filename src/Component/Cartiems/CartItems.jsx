import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalcartAmount, all_product, cartitem, removeItems } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />

                <p>{e.name}</p>

                <p>${e.new_price}</p>

                <button className="cartitem-quantity">{cartitem[e.id]}</button>

                <p>${e.new_price * cartitem[e.id]}</p>

                <img
                  className="remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => removeItems(e.id)}
                />
              </div>

              <hr />
            </div>
          );
        }

        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>subtatal</p>
              <p>${ getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${ getTotalcartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you a promo code,Enter it here</p>
          <div className="Cartitem-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
