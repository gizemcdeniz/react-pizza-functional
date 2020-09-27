import React, { Component, useState, useEffect} from "react";



const PizzaForm = ({ setPizzas }) => {
  const [topping, setTopping] = React.useState("");
  const [size, setSize] = React.useState("small");
  const [vegetarian, setVegetarian] = React.useState(false);

  console.log(topping)
  console.log(size)
  console.log(vegetarian)

  const handleSubmit = () => {
    {topping}
    {size}
    {vegetarian}
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            onChange={(e)=> setTopping(e.target.value)}
            value={topping}
                
              />
        </div>
        <div className="col">
          <select onChange={(e)=> setSize(e.target.value)}  value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col"> 
          <div className="form-check">
            <input className="form-check-input" type="radio"  name="radiobutton" onChange={(e)=>setVegetarian(e.target.value)} value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio"  name="radiobutton" value="Not Vegetarian"  onChange={(e)=> setVegetarian(e.target.value)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
