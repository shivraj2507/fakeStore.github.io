import { useEffect, useState } from "react";
import "./App";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

import Navbar from "./components/Navbar";
import { products } from "../src/data";

function App() {
  const [loading, setLoading] = useState(true);
  const [fakeStore, setFakeStore] = useState("");
  // Api call function
  const fetchData = async () => {
    setLoading(true);
    try {
      // let response = await axios.get("https://fakestoreapi.com/products");
      ///output ->
      setFakeStore(products);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="bg-slate-900 ">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home fakeStore={fakeStore} loading={loading} />}
        ></Route>
        <Route
          path="/products"
          element={<Home fakeStore={fakeStore} loading={loading} />}
        ></Route>
        <Route
          path="/products/:productId"
          element={<ProductDetails fakeStore={fakeStore} loading={loading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
