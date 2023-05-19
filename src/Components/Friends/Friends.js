import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendDetails from '../FriendDetails/FriendDetails';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h6>I have a lots of friends {friends.length}</h6>
            {
                friends.map(friend => <FriendDetails key={friend.id} friend= {friend}></FriendDetails>)
            }
        </div>
    );
};

export default Friends;