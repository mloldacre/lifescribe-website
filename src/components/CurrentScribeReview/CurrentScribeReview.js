import React, { Component } from 'react';
import ScribeContext from '../../contexts/ScribeContext';
import { Link } from 'react-router-dom';
import './CurrentScribeReview.css';
import moment from 'moment-timezone';

export default class CurrentScribeReview extends Component {

  static contextType = ScribeContext
//TODO fix time displayed
  renderScribeScribbles = ( scribbles = [] ) => {
    const { onDelete, onEdit } = this.props 
    if (!scribbles.length) {return null}
    return (
      <ul className='ScribeReviewViewScribblesList'>
        {scribbles.map(scribble =>
          <li key={scribble.id} className='ScribeReviewViewScribble'>
            <p>{moment(scribble.time_created).tz('America/New_York').format('hh:mm:ss a')}</p>
            <p>{scribble.scribble_content}</p>
            <Link to={`/scribbleEntry/${scribble.id}`}><button
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
          </li>)}
      </ul>
    )
  }

  render() {
    const { date, scribeId, scribbles } = this.props
    console.log("CSR: ScribeId",scribeId)
    return (
      <div className="CurrentScribeReview">
        <h1>{moment(date).tz('America/New_York').format('MM/DD/YYYY')}</h1>
        <h3>{scribeId}</h3>
        {this.renderScribeScribbles(scribbles)}
      </div>
    );
  }

}

//TODO Get scribble ID passed from this function to delete action above ^

//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}

//