import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import QuantityAdderForm from "./QuantityAdderForm";
import { CartItems } from "../../store/Data.context";

const Cart = (props) => {
  const ctx = useContext(CartItems);
  const IndividualTotalPrice = ctx.itemsData.map((val)=> {
    return val.quantity * val.dishPrice
  })
  let Total = 0;
  for(const val of IndividualTotalPrice) {
    Total = Total + val
  }

  console.log(Total)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.itemsData.map((item) => (
        <li className={classes.cartlist}>
          <h3>{item.dishName}</h3>
          <div className={classes.priceQuantityContainer}>
            <span>${item.dishPrice}</span>
            <p>x{item.quantity}</p>
            <QuantityAdderForm quantity={item.quantity} dishName={item.dishName}/>
          </div>
          
          <hr></hr>
        </li>
      ))}
    </ul>
  );

  function modalCloser() {
    props.modalCloser();
  }
  console.log(props);
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
