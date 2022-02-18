import React, { useEffect, useState } from "react";
import { Navbar1 } from "./Navbar1";
import { Product } from "./Product";
import axios from "axios";

export const Huawei = () => {
  const [mobiles, setmobiles] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    var products = await axios.get("http://localhost:8000/huawei");
    const data = await products.data;
    setmobiles(data);
    // console.log(data[0]);
    // console.log(data[1].BrandName);
  };
  return (
    <div className="text-light">
      <Navbar1 />
      <div className="container">
        <h1 className="text-center"> Huawei</h1>
        <div className="cardContainer d-flex flex-wrap justify-content-center text-center">
          {mobiles
            ? Array.from(mobiles).map((product, index) => {
                return (
                  <Product
                    key={product._id}
                    id={product._id}
                    image={"http://localhost:8000/uploads/" + product.Photo}
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
