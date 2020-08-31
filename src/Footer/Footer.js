import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Contact from '../Contact/Contact';
import About from '../About/About';

export default function Footer() {
  return (
    <footer className="Footer">
      <Link to='/about'>
        <About />
      </Link>
      <Link to='/contact'>
        <Contact />
      </Link>
    </footer>
  );
}
