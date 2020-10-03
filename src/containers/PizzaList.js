import React, { Component, useState, useEffect} from "react";
 import Pizza from "../components/Pizza";
 
function PizzaList({ setEditedPizza }) {
  const [pizzas, setPizzas] = useState([])

  function fetchPizza () {

  fetch('http://localhost:3000/pizzas')
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
     console.log (json)
     setPizzas(json)
  })

  
 
  }

  const usersPizzas = () => pizzas.map((pizza) => <Pizza pizza={pizza} setEditedPizza={}/>  )
  console.log(usersPizzas);
  // setPizzas(usersPizzas)

useEffect(()=>{
  fetchPizza()
},[])

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
          usersPizzas()
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
