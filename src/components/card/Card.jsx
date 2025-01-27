import React, { Component } from "react";

class Card extends Component {
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
      <div style={styles.container}>
        <h1 style={styles.heading}>COLLECTIONS</h1> {/* Heading at the top */}
        <div style={styles.cardsContainer}> {/* Container for cards */}
          {[
            {
              src: "https://cdn.shopify.com/s/files/1/1899/4221/files/The_Ultimate_Guide_to_Fashion_Photography_for_Your_E-Commerce_Lookbook_Part_1_1_1.png?v=1684295371",
              text: "Fashion is the armor to survive the reality of everyday life",
            },
            {
              src: "https://www.skaskajewelry.com/cdn/shop/articles/H14A3642-small_16f0f3fa-f843-47ec-bdd4-95544d4e1c38_800x.jpg?v=1611342541",
              text: "Sweetness in every shimmer",
            },
            {
              src: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/02/f635f6b9-88b4-45ab-9741-1696ed7dcf77.jpg",
              text: "Life is too short to carry boring bags",
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
              <img src={item.src} alt="" style={styles.image} />
              <div style={styles.text}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack heading and cards vertically
    alignItems: "center", // Center the heading and cards
    padding: "20px",
  },
  heading: {
    color: "white",
    fontSize: "2em",
    marginBottom: "20px",
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row", // Keep the cards in a row
    overflowX: "auto", // Allows horizontal scrolling if needed
    gap: "20px", // Increased gap between cards
    padding: "10px", // Padding to create space around the cards
    width: "100%", // Ensure container takes full width
    maxWidth: "1600px", // Max width to prevent stretching on large screens
    boxSizing: "border-box", // Include padding in width calculation
  },
  slide: {
    position: "relative",
    flex: "0 0 auto", // Prevent flex items from shrinking and growing
    overflow: "hidden",
    border: "2px solid blue", // Border for the image
    borderRadius: "10px", // Optional: rounded corners
    transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box-shadow
    width: "300px", // Fixed width to ensure consistent size
  },
  image: {
    width: "100%", // Make image responsive to container width
    height: "200px", // Adjust height for responsiveness
    objectFit: "cover", // Ensures the image covers the area without distortion
    display: "block",
  },
  text: {
    position: "absolute",
    bottom: "20px", // Adjusted for increased height
    left: "10px",
    right: "10px",
    color: "blue",
    backgroundColor: "white", // Background color for the text box
    padding: "15px", // Increased padding
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Box shadow for better visibility
    textAlign: "center", // Center align text
    transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth transition for animations
    opacity: "0.9", // Slightly transparent
    transform: "scale(1)", // Initial scale
  },
  slideHover: {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)", // Box-shadow on hover
    transform: "scale(1.05)", // Scale up on hover
    opacity: "1", // Fully opaque on hover
  },
};

export default Card;
