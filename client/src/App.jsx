
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import AddResources from "./pages/AddResources"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
      path ="/"
      element={
        <Homepage/>
      }
      
      />
      <Route
      path ="/addResources"
      element={
        <AddResources/>
      }
      
      />
{/* <Route path="/products" element={<ProductsList />} /> */}


    </Routes>
    </BrowserRouter>
    </>
  )
}