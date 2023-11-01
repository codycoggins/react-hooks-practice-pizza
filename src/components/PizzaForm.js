import React from "react";

function PizzaForm(props) {
  const setPizzaForm = props.setPizzaForm;
  const changeVeg = ((e) => {
    console.log(`changeVeg ${e.target.id}`);
    setPizzaForm({
      ...props.pizzaForm,
      vegetarian: e.target.id
    })
  });
  const changeTopping = ((e) => {
    console.log(`changeTopping ${e.target.value}`)
    setPizzaForm({
      ...props.pizzaForm,
      topping: e.target.value
    })
  })
  const changeSize = ((e) => {
    console.log(`changeSize ${e.target.value}`)
    setPizzaForm({
      ...props.pizzaForm,
      size: e.target.value
    })
  })
  // console.log(`pizzaForm: ${props.pizzaForm}`)
  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div>Filter:</div>
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={props.pizzaForm.topping}
            onChange={changeTopping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" selected={props.pizzaForm.size} onChange={changeSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Any">Any</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              id="veg"
              checked={props.pizzaForm.vegetarian==="veg"}
              onClick={changeVeg}
              onChange={changeVeg}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              id="non-veg"
              checked={props.pizzaForm.vegetarian==="non-veg"}
              onClick={changeVeg}
              onChange={changeVeg}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Any"
              id="any"
              checked={props.pizzaForm.vegetarian==="any"}
              onClick={changeVeg}
              onChange={changeVeg}
            />
            <label className="form-check-label">Any</label>
          </div>
        </div>
        {/* <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div> */}
      </div>
    </form>
  );
}

export default PizzaForm;
