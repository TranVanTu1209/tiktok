import React, { useState, useEffect } from 'react';
import Video from './components/Video';
import video1 from './assets/Snaptik_6862680803810364674_thuong.mp4';
import video2 from './assets/Snaptik_6862908165734845697_tippyntp.mp4';
import video3 from './assets/Snaptik_6862961781724171525_for-pets.mp4';
import video4 from './assets/Snaptik_6863031998554918146_joe.mp4';
import video5 from './assets/Snaptik_6841837184580914433_gia-long.mp4';
import video6 from './assets/Snaptik_6863328924701592833_han-tuyet.mp4';
import { db } from './firebase/firebase';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    })
  }, [videos]);
  return (
    <div className="app">
      <div className="app__videos">

        <Video videoUrl={video6} channel="@tuvantran" likes={245} comments={414} shared={747}
          description="Love you guys" song="Heart Breaker" />
        <Video videoUrl={video5} channel="@bradtraversy" likes={44} comments={344} shared={447}
          description="Big challenge for days" song="Bai nay chill phet" />
        <Video videoUrl={video1} channel="@sontung" likes={854} comments={45} shared={407}
          description="when bad man meet iron man" song="When I see you again" />
        <Video videoUrl={video2} channel="@binz" likes={99} comments={44} shared={437}
          description="Clever Programmer is the best" song="Blank Space" />
        <Video videoUrl={video3} channel="@jackie" likes={234} comments={234} shared={49}
          description="Jack ma will desctroy amazon soom" song="I want something just like this" />
        <Video videoUrl={video4} channel="@alanwalker" likes={17} comments={424} shared={37}
          description="Oh man. Just relax" song="Hay trao cho anh" />
        {
          videos && videos.map(video => {
            return <Video key={video.id} videoUrl={video.videUrl} channel={video.channel} likes={video.likes}
              comments={video.comments} shared={video.shared}
              description={video.description} song={video.song} />
          })
        }
      </div>
    </div>
  );
}

export default App;
