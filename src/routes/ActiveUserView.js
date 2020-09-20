import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

export default class ActiveUserView extends Component {
  render() {
    return (
      <main>
      <h1>Main Menu</h1>      
      <Link to='/scribesCalendar/'>
        <p>Calendar</p>
      </Link>
        <Link to='/scribeReview/'>
          <p>Current Scribe</p>
      </Link>
        <Link to='/scribbleEntry/'>
          <p>Enter Scribbles</p>
      </Link>
      </main>
    )
  }

}