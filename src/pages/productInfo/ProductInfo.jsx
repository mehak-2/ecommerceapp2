import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../fireabase/FirebaseConfig";

function ProductInfo() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [products, setProducts] = useState({});
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [params.id]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    dispatch(addToCart({ ...product, size: selectedSize }));
    toast.success("Added to cart");
  };

  const addToWishlist = (product) => {
    // Implement wishlist functionality
    toast.success("Added to wishlist");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden bg-black">
        <div className="container px-40 py-10 mx-10">
          {products && (
            <div className="lg:flex" style={{ gap: "10px" }}>
              {/* Left Section: Thumbnail Images */}
              {/* Middle Section: Main Image */}
              <div className="lg:w-1/4 w-full flex items-center justify-center" style={{ marginLeft: "0" }}>
                <img
                  alt="ecommerce"
                  className="w-[600px] h-[600px] object-cover object-center rounded main-image"
                  src={products.imageUrl}
                />
              </div>
              {/* Right Section: Product Details */}
              <div className="lg:w-1/2 w-full flex flex-col lg:pl-10">
                <div className="lg:w-full lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {products.category}
                  </h2>
                  <span
                    className="title-font font-medium text-2xl mr-4"
                    style={{ color: "white" }}
                  >
                    ₹{products.price}
                  </span>
                  <h1
                    className="text-3xl title-font font-medium mb-1"
                    style={{ color: "white" }}
                  >
                    {products.title}
                  </h1>
                  <p className="leading-relaxed border-b-2 mb-5 pb-5">
                    {products.description}
                  </p>
                  {products.description1 && (
                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                      {products.description1}
                    </p>
                  )}
                  {products.description2 && (
                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                      {products.description2}
                    </p>
                  )}
                  {products.description3 && (
                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                      {products.description3}
                    </p>
                  )}
                  <div className="flex mb-4">
                    {/* Size Selector Dropdown */}
                    <label htmlFor="size" className="mr-4">
                    </label>
                    <select
                      id="size"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="bg-gold border text-black rounded-lg p-2"
                    >
                      <option value="">Select size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => addCart(products)}
                      className="text-black bg-gold py-2 px-6 focus:outline-none border-0 rounded mr-4"
                      style={{
                        background:
                          "gold",
                        transition: "background 0.3s ease-in-out",
                      }}
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => addToWishlist(products)}
                      className="text-white bg-gradient-to-r from-[#f19257] to-[#2f4fe1] py-2 px-6 focus:outline-none border-0 rounded"
                      style={{
                        background:
                          "linear-gradient(to right, #f19257, #2f4fe1)",
                        transition: "background 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background =
                          "linear-gradient(to right, #ff0000, #0000ff)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background =
                          "linear-gradient(to right, #f19257, #2f4fe1)")
                      }
                    >
                      Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
