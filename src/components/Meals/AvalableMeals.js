import classes from "./AvailabelMeals.module.css";
import Card from "../UI/Card/Card";
import MealForm from "./MealForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((val) => {
          return (
            <Card>
              <li >
                <div key={val.id}>
                  <h2>{val.name}</h2>
                  <p>{val.description}</p>
                  <b>${val.price.toFixed(2)}</b>
                </div>
                <div className="formContainer">
                  <MealForm id={val.id} dishName={val.name} dishPrice= {val.price.toFixed(2)} dishDescription={val.description}></MealForm>
                </div>
              </li>
            </Card>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
