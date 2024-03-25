import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
const Post = () => {
  const params = useParams();
  const navigate = useNavigate();
  const status = 200;
  if (status === 404) {
    return <Navigate to="*" />;
  }
  const onClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Post</h1>
      <p>id:{params.id}</p>
      <p>Name:{params.name}</p>
      <button onClick={onClick}>Click here</button>
    </div>
  );
};

export default Post;
