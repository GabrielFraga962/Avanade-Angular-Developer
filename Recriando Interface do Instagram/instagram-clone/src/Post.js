import React, { useEffect, useState } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from 'firebase';


function Post({postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState ([]);
    const [comment, setComment] = useState('');
    
    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()))
            })  
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);

    const postComment = (event) =>{
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        });
        setComment('');
    }

    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="peterThomas789" src="https://p4.wallpaperbetter.com/wallpaper/661/326/368/man-made-watch-chain-pocket-watch-wallpaper-thumb.jpg"/>
                <h3>{username}</h3>
            </div>

            <img className="post_iamge" src={imageUrl} alt="" />

            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>

            <div className = "post__comments">
                {comments.map((comment) => (
                <p>
                    <strong>{comment.username}</strong> {comment.text}
                 </p>
                ))}
            </div>

            {user && (

                <from className="post_commentBox">
                <input 
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button 
                    className="post__button" 
                    disabled={!comment} 
                    type="submit"
                    onClick={postComment} >Post
                </button>       
                </from>
            )}         
    </div>
    )
}

export default Post
