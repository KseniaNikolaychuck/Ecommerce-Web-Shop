// import Products from "./components/Products/Products";
// import Nav from "./components/Nav/Nav";
import React, {useState, useEffect} from "react";
import {commerce } from'./lib/commerce'
import {Products, Nav} from './components'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async() =>{
    const { data} = await commerce.products.list()
    setProducts(data)
  }

  useEffect(()=> {
    fetchProducts()
  }, [])
  return (
    <div className="App">
      <Nav/>
     <Products />
    </div>
  );
}

export default App;
