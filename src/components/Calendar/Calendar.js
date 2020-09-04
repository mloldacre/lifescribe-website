import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Calendar.css';

export default class Calendar extends Component {
  render () {
    const { scribe } = this.props
    return (
      // <Link to={`/scribes/${scribe.id}`} className='Calendar'>
      <div className="ScribeInCalendar">
        {scribe.date_created}
      </div>      
      // {/* </Link> */}
    );
    
  }
}
