import React from 'react';
import '../../Style.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function BackButton() {
  return (
    <div>
      {TokenService.hasAuthToken()
        ? <Link to='/loggedIn'>
          <button className='BackButton' type='button'>
            Back
        </button>
        </Link>
        : <Link to='/'>
          <button className='BackButton' type='button'>
            Back
        </button>
        </Link>}
    </div>
  );
}