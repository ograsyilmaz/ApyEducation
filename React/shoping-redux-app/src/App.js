import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './containers/Header'
import ProductListing from "./containers/ProductListing"
import ProductDatail from "./containers/ProductDetail";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<ProductListing/>} />
      <Route path="product/:productId" element={<ProductDatail />} />
      <Route path="*" element={<div>404 Not Found !</div>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
