import React,{useState,useEffect} from 'react';
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas,setPizzas]=useState([]);
  const [pizzaForm,setPizzaForm]=useState({
    topping: "Pepperoni",
    size: "Medium",
    vegetarian: "veg"
  });
  const getData=()=>{
    fetch('http://localhost:3001/pizzas'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setPizzas(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Header />
      <PizzaForm pizzaForm={pizzaForm} setPizzaForm={setPizzaForm}/>
      <PizzaList pizzas={pizzas} pizzaForm={pizzaForm}/>
    </>
  );
}

export default App;
