import "./App.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./route/homepage/Homepage";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
