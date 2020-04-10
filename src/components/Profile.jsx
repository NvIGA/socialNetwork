import React from "react";

export const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://images.unsplash.com/photo-1586397148583-f5a6db7dff06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1338&q=80"
          alt="profile"
        />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png"
          alt="ava"
        />
        desc
      </div>
      <div>
        My post
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};
