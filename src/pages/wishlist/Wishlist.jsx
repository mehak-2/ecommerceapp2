import React from 'react';
import { useSelector } from 'react-redux';
import Layout from "../../components/layout/Layout";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-40 py-10 mx-10">
          <h1 className="text-center text-3xl font-bold mb-8" style={{ color: "#011F9E" }}>
            Wishlist
          </h1>
          <div className="flex flex-col gap-8">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((product) => (
                <div key={product.id} className="flex flex-col mb-4 border p-4 rounded-lg">
                  <img
                    alt={product.title}
                    className="w-full h-[300px] object-cover object-center rounded mb-4"
                    src={product.imageUrl}
                  />
                  <h2 className="text-xl font-medium mb-2" style={{ color: "#011F9E" }}>
                    {product.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-medium" style={{ color: "#011F9E" }}>
                      ₹{product.price}
                    </span>
                    <button
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
                      Order Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Wishlist;
