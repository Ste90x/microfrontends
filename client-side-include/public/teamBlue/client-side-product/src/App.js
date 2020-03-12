import React, { useState } from "react";
import "./App.scss";
import SelectedProductDetails from "./components/PageFragments/SelectedProductDetails/SelectedProductDetails";
import ProductSuggestionBar from "./components/PageFragments/ProductSuggestionBar/ProductSugesstionBar";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    id: "0",
    name: "Pizza",
    price: "4,99",
    description: "SUCH GOOD, MUCH WOW!",
    image: "https://images.alphacoders.com/959/thumb-1920-959369.jpg"
  });

  return (
    <div className="App">
{/*       <SelectedProductDetails
        selectedProduct={selectedProduct}
      ></SelectedProductDetails> */}
      <ProductSuggestionBar></ProductSuggestionBar>
    </div>
  );
};

export default App;
