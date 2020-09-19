import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import '../../Style.css';

export default class Calendar extends Component {
  render() {
    const { scribe } = this.props
    return (
      <div className="ScribeInCalendar">
        <Link to={`/scribeReview/${scribe.id}`} className='Calendar'>
          {moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY')}
        </Link>
      </div>
    );

  }
}


//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}