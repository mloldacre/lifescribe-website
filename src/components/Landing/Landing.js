import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Logo from '../../images/1515806.png';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Subscribe to YOUR life!</h1>
      </Link>
      <Link to='/demo'>
        Try a Scribe!
      </Link>
      <Link to='/demo'><img src={Logo} alt='Logo goes here' /></Link>
    </div>
  );
}
