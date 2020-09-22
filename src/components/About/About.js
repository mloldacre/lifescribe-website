import React from 'react';
import BackButton from '../BackButton/BackButton';
import '../../Style.css';

export default function About() {
  return (
    <div className="About">
      <div><article>
        <h3>A Little About Me:</h3>
        <p>I graduated from Miami Dade College with an A.A in Computer Science, an A.S in Mobile Application
        Development,
        and a B.S in Information Systems Technology. I gained a moderate comprehension of various programming
        languages
        including Visual Basic, C++, Java, PHP, and SQL. Due to circumstances stemming from the Covid-19 pandemic, I
        saw
          an opportunity to increase my programming and development skill level as much as possible. </p>

        <p>While not learning about web development I enjoy photography, photo editing, archery, biking, and video
          games.</p>

        <p>Looking forward to learning as much as possible about web development through the Thinkful Engineering
          Immersion Program so I can provide full stack services!</p>
      </article></div>
      <BackButton/>
    </div>
  );
}

