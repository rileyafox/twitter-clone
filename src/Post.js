import React, { useState,useEffect }  from "react";
import "./Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from "react-router-dom";



function Post({displayName,username,verified,title,content,avatar,comments,shares,likes,twitterId}) {
    const [commentCount, setCommentCount] = useState(0);
    const [repeatCount, setRepeatCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);

    

    return (
    <Link to= {`/${username}/${twitterId}`} style= {{textDecoration: 'none', color: 'inherit' }}  > 
        <div className = "post">
            <div className = "post__avatar">
                <Avatar src={avatar}  />        
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                        <h3>
                            {displayName} {""} 
                            <span className = "post_headerSpecial"> 
                                {verified && <VerifiedUserIcon className="post__badge" />} @
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p> {title} </p> 
                    </div>
                    <img src= {content} alt= "" />
                    <div className = "post__footer">
                        <span className ="post__chatSpan"> <ChatBubbleOutlineIcon className = "post__chatStyling" fontSize="small" onClick={() => setCommentCount(commentCount + 1)}   />
                            <span className = "post__chatFormating">{comments + commentCount} </span>
                        </span> 

                        <span className ="post__repeatSpan"> <RepeatIcon className = "post__repeatStyling" fontSize="small" onClick={() => setRepeatCount(repeatCount + 1)} />
                            <span className = "post__repeatFormating">{shares + repeatCount}</span>
                        </span>

                        <span className ="post__favoriteSpan"> <FavoriteBorderIcon className = "post__favoriteStyling" fontSize="small" onClick={() => setLikeCount(likeCount + 1)} />
                            <span className = "post__favoriteFormating">{likes + likeCount}</span>
                        </span>
                        <PublishIcon fontSize="small" />
                    </div>
            </div> 

            </div>
        </div>
    </Link>
)
}

export default Post;