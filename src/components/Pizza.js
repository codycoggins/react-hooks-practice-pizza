import React, {useState} from "react";

function Pizza(props) {
  const [editable,setEditable]=useState(false);
  const [tempPizza,setTempPizza]=useState({
    id: props.id,
    topping: props.topping,
    size: props.size,
    vegetarian: props.vegetarian
  });
  const changeVeg = ((e) => {
    console.log(`changeVeg ${e.target.id}`);
    setTempPizza({
      ...tempPizza,
      vegetarian: e.target.id
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
    console.log(`save pizza ${tempPizza.id} ${tempPizza.topping} ${tempPizza.size} ${tempPizza.vegetarian}`)
    const response = fetch(`http://localhost:3001/pizzas/${props.id}`, {      // 
      Method: 'PATCH',
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      Body: JSON.stringify(tempPizza),
      Cache: 'default'
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
            name="topping"
            placeholder="Pizza Topping"
            value={tempPizza.topping}
            onChange={changeTopping}
          /></td>
        <td>
          <select className="form-control" name="size" selected={tempPizza.size} onChange={changeSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Any">Any</option>
          </select>
        </td>
        <td>{props.vegetarian.toString()}</td>
        <td>
        <button type="button" className="btn btn-primary" onClick={savePizzaAndToggle}>
            Save
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
