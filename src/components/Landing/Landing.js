import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';

export default function Landing() {
  return (
    <div className="Landing">
      Subscribe to YOUR life!
      <Link to='/demo'>
        Try a Scribe!
      </Link>
    </div>
  );
}
