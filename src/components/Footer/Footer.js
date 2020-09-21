import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <Link to='/about'>
        About
      </Link>
      <Link to='/contact'>
        Contact
      </Link>
    </footer>
  );
}
