import React from "react";
import "./ProcessSection.css";
const ProcessSection = () => {
  return (
    <section className="container">
      <h4 className="section__heading">The Process</h4>
      <h2 className="section__subheading">Our simple three step process</h2>
      <div className="section__body">
        <div className="section__card">
          <div className="section__card__header">
            <div className="img__container">
              <img
                src="https://assets.website-files.com/6184507fd676d306d61d40f9/618973608b3d265178fad009_Rectangle%20259.png"
                alt="content"
              />
            </div>
            <div className="img__count">
              <h2>1</h2>
            </div>
          </div>
          <div className="img__info">
            <h5 className="img__heading">Complete the application</h5>
            <h5 className="img__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h5>
          </div>
        </div>
        <div className="section__card">
          <div className="section__card__header">
            <div className="img__container">
              <img
                src="https://assets.website-files.com/6184507fd676d306d61d40f9/61897360d6083cd9f058b0aa_Rectangle%20263.png"
                alt="content"
              />
            </div>
            <div className="img__count">
              <h2>2</h2>
            </div>
          </div>
          <h5 className="img__heading">Get a quote ASAP</h5>
          <h5 className="img__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h5>
        </div>
        <div className="section__card">
          <div className="section__card__header">
            <div className="img__container">
              <img
                src="https://assets.website-files.com/6184507fd676d306d61d40f9/61897360678751deee4489ae_Rectangle%20264.png"
                alt="content"
              />
            </div>
            <div className="img__count">
              <h2>3</h2>
            </div>
          </div>
          <h5 className="img__heading">Get insured</h5>
          <h5 className="img__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
