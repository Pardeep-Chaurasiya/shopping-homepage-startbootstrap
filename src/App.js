import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import data from "./components/data/data.json"

function App() {

  let [itemCount,setItemCount] = useState(0)

  const manageItem =(e) =>{
    if(e.target.innerText==="Add to cart")
      addItem(e)
    else if(e.target.innerText === "Remove from Cart")  
      removeItem(e)
  }

  const addItem = (e) =>{
    setItemCount(()=> itemCount+1)
    e.target.innerText = "Remove from Cart"
    e.target.classList.value = "btn btn-danger mt-auto"
  }
  
  const removeItem = (e) =>{
    setItemCount(()=> itemCount-1)
    e.target.innerText = "Add to Cart"
    e.target.classList.value = "btn btn-primary mt-auto"
    
  }

  return (
   <>
   <Navbar itemCount={itemCount}/>
   <Header/>
   <Card data={data} manageItem={manageItem} />
   <Footer/>
   </>
  );
}

export default App;
