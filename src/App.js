import ReactDOM from "react-dom";
import { useState } from "react";
import Items from "./store/Data.context";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [display, setDisplay] = useState("none");
  
  function modalOpener() {
    setDisplay("block");
  }

  function modalCloser() {
    setDisplay('none');
  }

  return (
    <>
      <Header modalOpener={modalOpener}></Header>
      {ReactDOM.createPortal(
        <Cart modalCloser={modalCloser} display={display}></Cart>,
        document.getElementById("modal")
      )}
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
