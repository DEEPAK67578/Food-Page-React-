import { useContext } from "react";
import "./QuantityAdderForm.css";
import { CartItems } from "../../store/Data.context";

const QuantityAdderForm = (props) => {
  const ctx = useContext(CartItems);

  function Add(event) {
    event.preventDefault();
    const Index = ctx.itemsData.findIndex((val) => {
      return (val.dishName === props.dishName);
    });

    ctx.itemsData[Index].quantity = props.quantity + 1;
    ctx.quantity(ctx.quantityData + 1);
  }

  function Sub(event) {
    event.preventDefault();
    const Index = ctx.itemsData.findIndex((val) => {
      return (val.dishName === props.dishName);
    });

    ctx.itemsData[Index].quantity = props.quantity - 1;
    ctx.quantity(ctx.quantityData - 1);
  }

  return (
    <form className="priceAdder">
      <button type="submit" onClick={Sub}>
        -
      </button>
      <button type="submit" onClick={Add}>
        +
      </button>
    </form>
  );
};

export default QuantityAdderForm;
