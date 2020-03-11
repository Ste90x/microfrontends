import React from "react";
import "./App.scss";

import Products from "./components/Products/Products";
import ProductDetails from "./components/PageFragments/ProductDetails/ProductDetails";
import SuggestionsBar from "./components/PageFragments/SuggestionsBar/SuggestionsBar";

const App = () => (
  <div className="App">
    <Products />
  </div>
);

export default App;
