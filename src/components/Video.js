import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const Video = ({ videoUrl, channel, likes, comments, shared, description, song }) => {
  const [play, setPlay] = useState(false);
  const ref = useRef(null);
  const onVideoClick = () => {
    if (play)
    {
      ref.current.pause();
    } else
    {
      ref.current.play();
    }
    setPlay(!play);
  }
  return (
    <div className="video">
      <div className="video__top">
        <h4>
          <QueueMusicIcon /> <span>TikTok</span>
        </h4>
        <p>
          {channel}
        </p>
      </div>
      <video src={videoUrl} className="video__player" loop ref={ref} onClick={onVideoClick} >
      </video>
      <VideoSidebar likes={likes} comments={comments} shared={shared} />
      <VideoFooter song={song} description={description} channel={channel} />
    </div>
  )
}

export default Video;
