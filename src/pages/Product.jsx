import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const productFetch = async () => {
      try {
        const allproduct = await axios.get("https://dummyjson.com/products");
        const cutProduct = allproduct.data.products.slice(0, 5);
        setproduct(cutProduct);
      } catch (error) {
        console.log(error);
      }
    };

    productFetch();
  }, []);

  return (
    <>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <div key={item.id} className="product">
                <h1>{item.title}</h1>
                <img src={item.thumbnail} alt={item.thumbnail} />
              </div>
            </Link>
          </div>
        ))}

        <Link to={"/productlist"}>
          <button style={{ width: "100%", padding: "20px" }}>
            See all Product
          </button>
        </Link>
      </div>
    </>
  );
};

export default Product;
