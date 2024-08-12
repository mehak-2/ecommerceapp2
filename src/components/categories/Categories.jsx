import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { hoveredIndex } = this.state;

    return (
      <div>
        <h1 style={styles.heading}>Collections</h1>
        <div style={styles.container}>
          {[
            // First row of images
            {
              src: "https://img.freepik.com/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263158.jpg",
              text: "Accessories",
            },
            {
              src: "https://media.istockphoto.com/id/1186670499/photo/tender-jewerly-on-female-hand-close-up-shot.jpg?s=612x612&w=0&k=20&c=HT-sJ25or5MsW4aacTMJxNesrF46xh7SsqoYZrVufp8=",
              text: "Jewellery",
            },
            {
              src: "https://images.yaoota.com/ExIfPzftijfo0QjvSdZwAxB0QYs=/trim/yaootaweb-production-ke/media/crawledproductimages/113eb4c7bda2f057afd568fefbbbf106ed3e5fca.jpg",
              text: "HandBags",
            },
            // Second row of images
            {
              src: "https://img.freepik.com/free-photo/beautiful-woman-wearing-golden-jewelry_1150-15330.jpg",
              text: "Jewelry",
            },
            {
              src: "https://images.unsplash.com/photo-1560242180-df8a8360613a",
              text: "Clutches",
            },
            {
              src: "https://img.freepik.com/free-photo/fashion-summer-hat-jewelry-sunglasses_1150-18860.jpg",
              text: "Sunglasses",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                ...(hoveredIndex === index ? styles.slideHover : {}),
              }}
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={this.handleMouseLeave}
            >
              <img src={item.src} alt={item.text} style={styles.image} />
              {hoveredIndex === index && (
                <div style={styles.text}>{item.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  heading: {
    fontFamily: "fantasy", // Set the font family
    fontSize: "60px", // Set the font size
    textAlign: "center", // Center align the heading
    margin: "20px 0", // Add margin for spacing
    color: "white",
  },
  container: {
    display: "flex",
    flexWrap: "wrap", // Allow items to wrap into rows
    gap: "30px", // Space between images
    padding: "0", // Remove padding to avoid extra space
    justifyContent: "center", // Center align items in the container
  },
  slide: {
    position: "relative",
    flex: "0 0 calc(33.333% - 40px)", // Three items per row with gaps
    overflow: "hidden",
    borderRadius: "10px", // Optional: rounded corners
    transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box-shadow
  },
  image: {
    width: "100%",
    height: "300px", // Fixed height to ensure equal height
    objectFit: "cover", // Ensures the image covers the area without distortion
    display: "block",
    border: "10px solid gold", // Gold border with 2px width
  },
  text: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    right: "10px",
   fontWeight: "bold",
    color: "gold", // Set text color to gold
    fontFamily: "Times, Times New Roman, Georgia, serif", // Set the font family
    backgroundColor: "black", // Background color for the text box
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Optional: box shadow for better visibility
    textAlign: "center", // Center align text
    opacity: 1, // Ensure text is visible
    transition: "opacity 0.3s ease-in-out", // Smooth transition for text visibility
  },
  slideHover: {
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)", // Box-shadow on hover
  },
};

export default Categories;
