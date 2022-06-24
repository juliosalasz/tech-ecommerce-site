import "./App.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./route/homepage/Homepage";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";
import SignIn from "./route/signIn/SignIn";
import ProductCategory from "./route/productCategory/ProductCategory";
import ProductPage from "./route/productPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductCategory />} />
        <Route path="/shop/:id/:id" element={<ProductPage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
