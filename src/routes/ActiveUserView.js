import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ActiveUserView extends Component {
  render() {
    return (
      <main>
      
      <Link to='/scribesCalendar/u/:userId'>
        <p>Calendar</p>
      </Link>

        <Link to='/scribeReview/:userId/:scribeId'>
          <p>Current Scribe</p>
      </Link>
        <Link to='/scribeEntry/:scribeId'>
        Enter Scribbles
      </Link>
      </main>
    )
  }

}