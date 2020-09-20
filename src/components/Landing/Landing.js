import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Subscribe to YOUR life!</h1>
      </Link>
      <Link to='/demo'>
        Try a Scribe!
      </Link>
    </div>
  );
}
