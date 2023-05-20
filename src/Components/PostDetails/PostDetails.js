import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import './PostDetails.css';
const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div className="post-details">
      <h5>Details of Post Id : {id}</h5>
      <p>{title}</p>
      <p>{body}</p>
      <Link to ={`/friend/${userId}`}>Get Author  :{userId}</Link>
      <button onClick={handleNavigate}>Get Author</button>
    </div>
  );
};

export default PostDetails;
