import React from 'react';
import BackButton from '../BackButton/BackButton';
import '../../Style.css';

export default function About() {
  return (
    <div className="About">
      <div><article>I want to develop a journal web application that allows a user to log in and either create an entry for the current day or look back at their previous entries. When making an entry for the current day, the user can enter text for their thoughts, upload pictures, audio files, and video files. Each entry is called a scribe, and the events within a scribe are timestamped. When looking back at previous scribes, the events are listed in order by time so the user can see how their day went. Potential for sharing to friends in future versions.</article></div>
      <BackButton/>
    </div>
  );
}

