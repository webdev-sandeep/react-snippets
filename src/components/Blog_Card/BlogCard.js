import React from "react";
import "./BlogCard.css";
import profilePicture from "./assets/profile.png";
import blogImage from "./assets/blog.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card-container flex justify-center items-center">
      <div className="blog-card flex">
        <div className="image-container">
          <img className="blog-card-image" src={blogImage} alt="blog-post" />
        </div>
        <div className="blog-card-body mx-auto">
          <div className="blog-card-tags flex items-center">
            <span className="tag tag-purple">Product</span>
            <span className="tag tag-blue">Engineering</span>
          </div>
          <h1 className="blog-card-heading my-1">
            Designing a functional card component in react.
          </h1>
          <p className="blog-card-description my-1">
            🚀 Designing a reusable card component in React involves creating a
            visually appealing and functional UI. Let your content shine with a
            card component that's both functional and aesthetically pleasing! 🌟
          </p>
          <div className="blog-card-footer my-1 flex items-center">
            <span>
              <img
                src={profilePicture}
                alt="blog-creator"
                className="blog-creator-avatar"
              />
            </span>
            <span className="blog-creator-name">Sandeep Kumar</span>
            <span className="blog-card-date">- Mar 19, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
