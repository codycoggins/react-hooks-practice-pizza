import React from "react";
import Pizza from "./Pizza";

function PizzaList(props) {

  const userFilter = ((pizza)=>{
    // console.log(`this pizza=${pizza.topping} ${pizza.size} ${pizza.vegetarian}`);
    // console.log(`this filter=${props.pizzaForm.topping} ${props.pizzaForm.size} ${props.pizzaForm.vegetarian}`);
    return (
      // Substring match on toppings
      pizza.topping.toLowerCase().includes(props.pizzaForm.topping.toLowerCase())
    ) && (
      // Match sizes
      props.pizzaForm.size==="Any" ||
      pizza.size===props.pizzaForm.size
    )
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          props.pizzas.filter(userFilter).map((pizza,index)=> <Pizza {...pizza} key={index}/>)
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
