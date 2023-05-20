import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleFriend.css';
const SingleFriend = () => {
  const friend = useLoaderData();
//   console.log(friend);
  const {name,email,phone,company,address}=friend;

    return (
        <div className='single-friend'>
            <h1>{name}</h1>
            <p>Company : {company.name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.street}, {address.city}, {address.zipcode}</p>
        </div>
    );
};

export default SingleFriend;