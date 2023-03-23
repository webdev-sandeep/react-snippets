import React from "react";
import "./SwiggyRestaurantCard.css";

const SwiggyRestaurantCard = () => {
  const tags = [
    "chinese",
    "snacks",
    "thai",
    "bevrages",
    "tibetan",
    "nepalese",
    "fast food",
    "desserts",
  ];
  return (
    <div className="container">
      <h1 className="heading">Swiggy Restaurant Card</h1>
      <div className="cards">
        <div className="card">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qt6pesjgrowt6uxvpeie"
              alt="restaurant-card"
            />
            <div className="promoted">promoted</div>
          </div>
          <div className="description">
            <h2 className="card-name">Midnight Momos</h2>
            <div className="tags">
              {tags
                .map(
                  (tag) =>
                    tag.charAt(0).toUpperCase() + tag.slice(1, tag.length)
                )
                .join(", ")}
            </div>
          </div>
          <div className="card-info">
            <span className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                />
              </svg>
              5.0
            </span>
            <span className="dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
                />
              </svg>
            </span>
            <span className="time">46 min</span>
            <span className="dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
                />
              </svg>
            </span>
            <span className="price">₹240 for two</span>
          </div>
          <span className="divider"></span>
          <p className="offer-deal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a.998.998 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367L20.749 12zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001zm.3 9.6l-1.6-1.199l6-8l1.6 1.199l-6 8zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001z"
              />
            </svg>{" "}
            Flat 125 OFF | Use FLATDEAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwiggyRestaurantCard;
