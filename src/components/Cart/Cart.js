import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import QuantityAdderForm from "./QuantityAdderForm";
import { CartItems } from "../../store/Data.context";
let quan = 0;
const Cart = (props) => {
  const ctx = useContext(CartItems);
  const IndividualTotalPrice = ctx.itemsData.map((val) => {
    return val.quantity * val.dishPrice;
  });
  let Total = 0;
  for (const val of IndividualTotalPrice) {
    Total = Total + val;
  }

  const data = ctx.itemsData.map((item) => (
    Boolean(item.quantity) && <li className={classes.cartlist}>
      <h3>{item.dishName}</h3>
      <div className={classes.priceQuantityContainer}>
        <span>${item.dishPrice}</span>
        <p>x{item.quantity}</p>
        <QuantityAdderForm quantity={item.quantity} dishName={item.dishName} />
      </div>
      <hr></hr>
    </li>
  ));
  const cartItems = <ul className={classes["cart-items"]}>{data}</ul>;

  function modalCloser() {
    props.modalCloser();
  }
  return (
    <Modal modalCloser={props.modalCloser} display={props.display}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={modalCloser}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
