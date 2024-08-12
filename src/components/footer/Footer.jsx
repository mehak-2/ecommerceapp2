import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import logo from '../navbar/logo.png';
import payment from "./payment.png";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const footerStyles = {
    backgroundColor: "white", // Darker grey color for background
    color: "black", // Set text color to white
  };

  const commonLinkStyles = {
    color: "Black", // Set link color to white
  };

  return (

  <div
  className="px-16 pt-10"
  style={{
    ...footerStyles,
    border: '10px solid gold', // Set border to 10px solid gold
    borderRadius: '10px', // Set border radius to 10px
  }}
>
        <div className="up sm:flex justify-around my-4">
          <div className="one flex flex-col flex-1">
          <h1 className="font-medium my-2 font-400px" style={{ ...footerStyles, fontWeight: 'bold' }}>
  SHOP
</h1>

            {["New Arrivals", "Tops", "Pakistani Suits", "T-Shirts", "Trousers", "Korean Trend", "Pinterest Find", "Best Selling"].map((category) => (
              <Link
                key={category}
                to=""
                className="text-sm mt-1"
                style={commonLinkStyles}
              >
                {category}
              </Link>
            ))}
          </div>
         
          <div className="three flex-1">
            <h2 className="text-sm mt-1" style={footerStyles}></h2>
          </div>
          <div className="four flex-1">
            <h1 className="font-medium my-2" style={footerStyles}>
              Fabric Fashion
            </h1>
            <h1 className="font-medium my-2" style={footerStyles}>
              Address: 21 Hill Road,Bandra West, Mumbai
            </h1>
            <h1 className="font-medium my-2" style={footerStyles}>
              Maharashtra 400050
            </h1>
            <h1 className="font-medium my-2" style={footerStyles}>
              Fabric Fashion
            </h1>
          </div>
        </div>
        
        <div className="down sm:flex justify-between mt-5">
          <div className="left mt-10 flex items-center">    
          </div>
        </div>
      </div>
  );
}

export default Footer;
