import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const VideoSidebar = ({ shared, likes, comments }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__option" onClick={() => setLiked(!liked)} >
        {
          liked ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />
        }
        <span> {liked ? likes : likes - 1} </span>
      </div>
      <div className="videoSidebar__option">
        <ChatIcon fontSize="large" /> <span> {comments} </span>
      </div>
      <div className="videoSidebar__option">
        <ShareIcon fontSize="large" /> <span> {shared} </span>
      </div>
    </div>
  )
}

export default VideoSidebar;
