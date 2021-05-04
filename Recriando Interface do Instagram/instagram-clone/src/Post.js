import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="peterharris579" src="https://i.pinimg.com/originals/32/66/fa/3266faf36288990aafbe37392683dd88.jpg" />
                <h3>{username}</h3>
            </div>

            <img className="post_iamge" src={imageUrl} alt="" />

            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>

        </div>
    )
}

export default Post
