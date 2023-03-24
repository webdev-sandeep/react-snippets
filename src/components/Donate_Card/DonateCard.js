import React from "react";
import "./DonateCard.css";
import DonateBox from "../../assets/donate-box.png";

const DonateCard = () => {
  return (
    <div className="container">
      <h1 className="heading">Donate Me Card</h1>
      <div className="donate-card-container">
        <div className="donate-card-wrapper">
          <div className="donate-card-shadow"></div>
          <span className="donate-icon">
            <img src={DonateBox} alt="donate" />
          </span>
          <div className="donate-card">
            <h2 className="card-heading">Donate</h2>
            <div className="card-description">
              <p>Support your favorite creator.</p>
              <p>Donate below.</p>
            </div>
            <div className="buttons">
              <a
                className="paypal"
                href="https://www.paypal.com/in/home"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.93 12.99c.1 0 2.42.1 3.8-.24h.01c1.59-.39 3.8-1.51 4.37-5.17c0 0 1.27-4.58-5.03-4.58H7.67c-.49 0-.91.36-.99.84L4.38 18.4c-.05.3.19.58.49.58H8.3l.84-5.32c.06-.38.39-.67.79-.67z"
                  />
                  <path
                    fill="currentColor"
                    d="M18.99 8.29c-.81 3.73-3.36 5.7-7.42 5.7H10.1l-1.03 6.52c-.04.26.16.49.42.49h1.9c.34 0 .64-.25.69-.59c.08-.4.52-3.32.61-3.82c.05-.34.35-.59.69-.59h.44c2.82 0 5.03-1.15 5.68-4.46c.26-1.34.12-2.44-.51-3.25z"
                  />
                </svg>
                Paypal
              </a>
              <a
                className="patreon"
                href="https://www.patreon.com/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6Z"
                  />
                </svg>
                Patreon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
