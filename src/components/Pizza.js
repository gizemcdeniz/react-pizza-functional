import React from "react";

const Pizza = ({pizza, setEditedPizza }) => {
  console.log(pizza)
  const handleClick = () => {
   
     // You want to set the edited pizza to the selected pizza.
  };
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "yes" : "no"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza;