import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeContext from '../contexts/ScribeContext';
import { Section } from '../components/Utils/Utils'
import Calendar from '../components/Calendar/Calendar'
import './style.css'


export default class ScribeCalendarView extends Component {
  static contextType = ScribeContext;

  componentDidMount() {
    this.context.clearError()
    ScribeApiService.getScribesByUser()
      .then(this.context.setScribes)
      .catch(this.context.setError)
  }
  
  renderScribes() {
    const { scribes = [] } = this.context
    return scribes.map(scribe =>
      <Calendar
        key={scribe.id}
        scribe={scribe}
      />
    )
  }
  
  render() {
    const { error } = this.context
    return (
      <Section list className='ScribeCalendarView'>
      <h3>Scribe Calendar View</h3>
        {error
          ? <p className='error'>There was an error, try again</p>
          : this.renderScribes()}
      </Section>
    )
  }
  
}

