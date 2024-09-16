import React, { useState } from 'react';
import defaultVideo from '../../assets/videos/video-jfk.mp4'; // Adjust path as necessary
import Navbar from '../navbar/navbar';
import './video.css'

const Video = () => {

  const [src, setSrc] = useState(defaultVideo);


  const handleChange = (event) => {
    try {
      const file = event.target.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setSrc(objectUrl);

        // Clean up the object URL when the component unmounts or when a new file is selected
        return () => URL.revokeObjectURL(objectUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // <input type="file" onChange={handleChange} /> ======> to add the possibility for the users to load a video they wanna play implement under the video component this input tag
  return (
    <div className='position-relative' id='Home'>
      <div className='navPos'>
        <Navbar />
      </div>
      <div className='vidIndex'>
        <video src={src} autoPlay loop muted width="100%" playsInline className='border-0'>
          <track id="enTrack" src="entrack.vtt" label="English" kind="captions" srclang="en" default />
          <track id="itTrack" src="ittrack.vtt" label="Italiano" kind="captions" srclang="it" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
};

export default Video;