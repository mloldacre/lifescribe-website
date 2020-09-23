import React, { Component } from 'react';
import ScribeContext from '../../contexts/ScribeContext';
import { Link } from 'react-router-dom';
import '../../Style.css';
import moment from 'moment-timezone';

export default class CurrentScribeReview extends Component {

  static contextType = ScribeContext
  renderScribeScribbles = ( scribbles = [] ) => {
    const { onDelete, } = this.props 
    if (!scribbles.length) {return null}
    return (
      <ul className='ScribeReviewViewScribblesList'>
        {scribbles.map(scribble =>
          <li key={scribble.id} className='ScribeReviewViewScribble'>
          <span></span>
            <p>{moment(scribble.time_created).format('hh:mm:ss a')}</p>
            <p>{scribble.scribble_content}</p>
            <div><Link to={`/scribbleEntry/${scribble.id}`}><button
              className='Scribble__edit'
              type='button'>
              Edit
            </button>
            </Link>
            <button
              className='Scribble__delete'
              type='button'
              onClick={() => onDelete(scribble.id)}>
              Delete
            </button>
            </div>
          </li>)}
      </ul>
    )
  }

  render() {
    const { date, scribeId, scribbles } = this.props
    console.log("CSR: ScribeId",scribeId)
    return (
      <div className="CurrentScribeReview">
        <h3>{moment(date).format('MM/DD/YYYY')}</h3>
        {this.renderScribeScribbles(scribbles)}
      </div>
    );
  }

}



//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}

