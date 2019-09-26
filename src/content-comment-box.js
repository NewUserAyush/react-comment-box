import React from 'react';
import image from './profile.png';

function ContentCommentBox(props){
    return(
        <div className="flex">
            <div className="profile">
                <img src={image}/>
            </div>
            <div className="comment-content">
                <div className="username">{props.data.name}</div>
                <div>{props.data.description}</div>
            </div>
            {props.children}
        </div>
    )
}

export default ContentCommentBox;