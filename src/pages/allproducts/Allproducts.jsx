import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Allproducts() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    filterType,
    filterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Filter />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 md:py-16 mx-auto">
            <h1 style={{ color: "white", margin: "20px" }}>Filters</h1>
            <div className="flex flex-wrap -m-4">
              {product
                .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                .filter((obj) => obj.category.toLowerCase().includes(filterType))
                .filter((obj) => obj.price.includes(filterPrice))
                .map((item, index) => {
                  const { title, price, imageUrl, id } = item;
                  return (
                    <div
                      onClick={() =>
                        (window.location.href = `/productinfo/${id}`)
                      }
                      key={index}
                      className="p-4 md:w-1/4 drop-shadow-lg"
                    >
                      <div
                        className="h-full transition-shadow duration-300 ease-in-out rounded-2xl overflow-hidden"
                        style={{
                          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "transparent",
                          color: mode === "dark" ? "white" : "white",
                        }}
                      >
                        <div className="flex justify-center cursor-pointer">
                          <img
                            className="w-full h-80 object-cover rounded-lg"
                            src={imageUrl}
                            alt="product"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                        <div className="p-5">
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                            style={{ color: mode === "dark" ? "white" : "white" }}
                          ></h2>
                          <h1
                            className="title-font text-lg font-medium mb-3"
                            style={{ color: mode === "dark" ? "white" : "white" }}
                          >
                            {title}
                          </h1>
                          <p
                            className="leading-relaxed mb-3"
                            style={{ color: mode === "dark" ? "white" : "white" }}
                          >
                            ₹{price}
                          </p>
                          {/* <div className="flex justify-center">
                            <button
                              type="button"
                              className="focus:outline-none text-white bg-gold-200 hover:bg-blue-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-60 py-2"
                              style={{
                                background: "gold",
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
                              Buy now
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Allproducts;
