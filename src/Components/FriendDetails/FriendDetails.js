import React from "react";
import { Link } from "react-router-dom";
import "./FriendDetails.css";

const FriendDetails = ({ friend }) => {
  const { id, name, username, email } = friend;
  return (
    <div className="single-friend">
      <h2>Name :{name}</h2>
      <p>Name : {email}</p>
      <p>
        <small>
          UserName : <Link to={`/friend/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default FriendDetails;
