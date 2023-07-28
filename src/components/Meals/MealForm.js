import { useContext } from "react";
import "./MealFrom.module.css";
import { CartItems } from "../../store/Data.context";
let quan = 0;
let arrItems = [];
let itemCount = 0;
const MealForm = (props) => {
  const cartItems = useContext(CartItems);
  function itemAddHandler(event) {
    event.preventDefault();
    console.log(event);
    const value = event.target[0].value;
    quan = quan + +value;
    itemCount = +value;
    cartItems.quantity(quan);
    const getIndex = arrItems.findIndex(
      (val) => val.dishName === props.dishName
    );

    if(getIndex === -1) {
      arrItems.push({
        dishName: props.dishName,
        dishPrice: props.dishPrice,
        dishDescription: props.dishDescription,
        quantity: itemCount})
    }

    if(getIndex >= 0) {
      arrItems[getIndex].quantity = arrItems[getIndex].quantity + itemCount
    }
    console.log(arrItems)
  cartItems.items(arrItems)
  }
    return (
      <form onSubmit={itemAddHandler}>
        <label htmlFor={`mealAmount_${props.id}`}>Amount</label>
        <input
          id={`mealAmount_${props.id}`}
          type="number"
          min="1"
          max="5"
          defaultValue={1}
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
;

export default MealForm;
