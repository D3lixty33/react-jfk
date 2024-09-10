import React, { useState } from 'react';
import defaultVideo from '../../assets/videos/video-jfk.mp4'; // Adjust path as necessary

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
    <>
      <video src={src} autoPlay loop muted width="100%" className='border-0'>
        Sorry, your browser doesn't support embedded videos.
      </video>      
    </>
  );
};

export default Video;