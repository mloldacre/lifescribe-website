import React from 'react';
import BackButton from '../BackButton/BackButton'
import '../../Style.css';

export default function Contact() {
  return (
    <section>
    <div className="Contact">
      <h3>Contact Me</h3>
      <a href="mailto:mloldacre@live.com?subject=This%20is%20a%20legitimate%20email">Email Me</a>
      <a href="https://www.linkedin.com/in/mloldacre" target="_blank">LinkedIn</a>
      <a href="https://github.com/mloldacre" target="_blank">Github</a>
    <BackButton />
    </div>
     </section>
     
    
  );
}
