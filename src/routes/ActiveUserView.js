import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ActiveUserView extends Component {
  render() {
    return (
      <main>
      
      <Link to='/scribesCalendar'>
        <p>Calendar</p>
      </Link>

        <Link to='/scribeReview/:scribeId'>
          <p>Current Scribe</p>
      </Link>
        <Link to='/scribeEntry/:scribeId'>
        Enter Scribbles
      </Link>
      </main>
    )
  }

}