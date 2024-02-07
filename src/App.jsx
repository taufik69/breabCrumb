import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Productdetails from "./pages/productdetails";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <BreadCrumb />
        </div>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
