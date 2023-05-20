import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {id,title,body} = post;

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>{title}</h5>
            <p>{body}</p>
            {/* dynamic link */}
            <Link to={`/post/${id}`}>Visit : {id}</Link>
            <Link to ={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;