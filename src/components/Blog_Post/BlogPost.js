import React from "react";
import "./BlogPost.css";
import profileImage from "../../assets/profile.jpg";

const BlogPost = () => {
  return (
    <div className="blog-post">
      <div className="post-header">
        <div className="post-heading-container">
          <h1 className="heading">BE A MAN: RESPECT WOMEN</h1>
          <span className="hr"></span>
        </div>
        <div className="creator-container">
          <div className="creator-img">
            <img src={profileImage} alt="post-creator" />
          </div>
          <h2 className="creator-name">Sandeep Kumar</h2>
        </div>
      </div>
      <div className="post-body"></div>
    </div>
  );
};

export default BlogPost;
