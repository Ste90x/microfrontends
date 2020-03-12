import React from "react";
import "./SelectedProductDetails.scss";

const SelectedProductDetails = props => {
  /*   const selectedProductFromDatabase = axios
    .get("http://localhost:5000/products/" + props.id)
    .then(res => {
      return res.data;
    })
    .then(resData => {})
    .catch(err => console.log(err)); */

  return (
    <section className="selectedProductDetails">
      <h1>{props.selectedProduct.name}</h1>
    </section>
  );
};

export default SelectedProductDetails;
