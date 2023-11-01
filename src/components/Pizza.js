import React, {useState} from "react";

function Pizza(props) {
  const [editable,setEditable]=useState(false);
  const [tempPizza,setTempPizza]=useState({
    id: props.id,
    topping: props.topping,
    size: props.size,
    // translate db true/false into form "veg"/"non-veg"
    vegetarian: props.vegetarian ? "veg" : "non-veg"
  });
  console.log(`tempPizza: ${tempPizza.id} ${tempPizza.topping} ${tempPizza.size} ${tempPizza.vegetarian}`)
  const changeVeg = ((e) => {
    console.log(`changeVeg ${e.target.value}`);
    setTempPizza({
      ...tempPizza,
      // translate form true/false into db "veg"/"non-veg"
      vegetarian: e.target.value
    })
  });
  const changeTopping = ((e) => {
    console.log(`changeTopping ${e.target.value}`)
    setTempPizza({
      ...tempPizza,
      topping: e.target.value
    })
  })
  const changeSize = ((e) => {
    console.log(`changeSize ${e.target.value}`)
    setTempPizza({
      ...tempPizza,
      size: e.target.value
    })
  })
  const savePizzaAndToggle = ()=>{
    console.log(`save tempPizza ${tempPizza.id} ${tempPizza.topping} ${tempPizza.size} ${tempPizza.vegetarian}`)
    // Make a copy of pizza in the save format, which is different than what we get from the form.
    const savePizza = {
        ...tempPizza,
        // translate form true/false into db "veg"/"non-veg"
        vegetarian: (tempPizza.vegetarian==="veg") ? true : false
    }
    console.log(`save savePizza ${savePizza.id} ${savePizza.topping} ${savePizza.size} ${savePizza.vegetarian}`)
    const response = fetch(`http://localhost:3001/pizzas/${props.id}`, {      // 
      method: 'PATCH',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(savePizza),
      cache: 'default'
    });
    console.log(response)
    setEditable(!editable);
  }
  if (editable) {
    return(
      <tr>
        <td><input
            className="form-control"
            type="text"
            name="topping-edit"
            placeholder="Pizza Topping"
            value={tempPizza.topping}
            onChange={changeTopping}
          /></td>
        <td>
          <select className="form-control" name="size-edit" selected={tempPizza.size} onChange={changeSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </td>
        <td>
          <select className="form-control" name="vegetarian-edit" selected={tempPizza.vegetarian} onChange={changeVeg}>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </td>
        <td>
        <button type="button" className="btn btn-primary" onClick={savePizzaAndToggle}>
            Save
        </button>
        <button type="button" className="btn btn-primary" onClick={()=>setEditable(!editable)}>
            Cancel
        </button>
        </td>
      </tr>
    )}
  else
    return (
      <tr>
        <td>{props.topping}</td>
        <td>{props.size}</td>
        <td>{props.vegetarian.toString()}</td>
        <td>
          <button type="button" className="btn btn-primary" onClick={()=>setEditable(!editable)}>
            Edit Pizza
          </button>
        </td>
      </tr>
    );
}

export default Pizza;
