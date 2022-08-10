import React from "react";

export default function Post({ posts, user }) {
  console.log(posts);
  return (
    <>
      {posts.map((item, index) => {
        return (
          <div key={index}>
            <div className="info">
              <h3>{user.name}</h3>
              <h4>{user.phone}</h4>
            </div>
            <div>
              <h2>{item.id}</h2>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
