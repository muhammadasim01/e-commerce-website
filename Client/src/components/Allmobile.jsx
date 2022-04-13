import React, { useEffect, useState } from "react";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import axios from "axios";

export const Allmobile = () => {
  const [mobiles, setmobiles] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    var products = await axios.get("/allmobiles");
    const data = await products.data;
    setmobiles(data);
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container">
        <h1 className="text-center">All Mobiles </h1>
        <div className="cardContainer d-flex flex-wrap justify-content-center text-center">
          {mobiles
            ? Array.from(mobiles).map((product, index) => {
                return (
                  <Product
                    key={product._id}
                    id={product._id}
                    image={"/uploads/" + product.Photo}
                    brandname={product.BrandName}
                    modelname={product.ModelName}
                    price={product.Price}
                  />
                );
              })
            : console.log(mobiles[0])}
        </div>
      </div>
    </div>
  );
};
