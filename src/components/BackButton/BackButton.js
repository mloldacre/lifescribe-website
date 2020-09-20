import React from 'react';
import '../../Style.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function BackButton() {
  return (
    
    <button className='BackButton' type='button'>
    {TokenService.hasAuthToken()
        ? <Link to='/loggedIn'>Back</Link>
        : <Link to='/'>Back</Link>}
    </button>
    
  );
}