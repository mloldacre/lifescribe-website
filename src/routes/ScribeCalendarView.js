import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeCalendarContext from '../contexts/ScribeCalendarContext';
import Calendar from '../components/Calendar/Calendar'


export default class ScribeCalendarView extends Component {
  static contextType = ScribeCalendarContext;

  componentDidMount() {
    this.context.clearError()
    ScribeApiService.getScribes()
      .then(this.context.setScribeList)
      .catch(this.context.setError)
  }
  
  renderScribes() {
    const { scribeList = [] } = this.context
    return scribeList.map(scribe =>
      <Calendar
        key={scribe.id}
        scribe={scribe}
      />
    )
  }
  
  render() {
    const { error } = this.context
    return (
      <ul list className='ArticleListPage'>
        {error
          ? <p className='error'>There was an error, try again</p>
          : this.renderScribes()}
      </ul>
    )
  }
  
}

