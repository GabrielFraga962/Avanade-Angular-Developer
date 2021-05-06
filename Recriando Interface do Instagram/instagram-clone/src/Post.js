import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar
               className="post_avatar"
               alt="Thomas789"
               src="https://images4.alphacoders.com/783/783624.jpg"
            /> 
           <h3>{username}</h3>
           </div>
           
           {/* header avatar -> + username */}


            <img className="post_image" src={imageUrl} alt="" />

            <h4 className="post_text"><strong>{username}</strong>{caption}</h4> 
        </div>
    )
}

export default Post
