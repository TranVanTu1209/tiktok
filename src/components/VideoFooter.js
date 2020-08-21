import React from 'react';
import './VideoFooter.css';
import disk from '../assets/disk.png';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> {channel} </h3>
        <p>
          {description}
        </p>
        <MusicNoteIcon />
        <Ticker mode="smooth">
          {({ index }) => (
            <p> {song}</p>
          )
          }
        </Ticker>
      </div>
      <img src={disk} alt="Disk Icon" className="videoFooter__diskImage" />
    </div>
  )
}

export default VideoFooter;
