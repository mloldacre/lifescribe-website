import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import './Calendar.css';

export default class Calendar extends Component {
  render () {
    const { scribe } = this.props
    return (
      // <Link to={`/scribes/${scribe.id}`} className='Calendar'>
      <div className="ScribeInCalendar">
        {moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}
      </div>      
      // {/* </Link> */}
    );
    
  }
}
