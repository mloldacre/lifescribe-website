import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeContext from '../contexts/ScribeContext';
import { Section } from '../components/Utils/Utils'
import CurrentScribeReview from '../components/CurrentScribeReview/CurrentScribeReview'


export default class ScribeReviewView extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ScribeContext

  handleScribbleDelete = (scribbleId) => {
    ScribeApiService.deleteScribble(scribbleId)
      .then(() => {
        this.context.clearError()
        this.context.deleteScribble(scribbleId)
        }
      )
      .catch(this.context.setError)
  }

  componentDidMount() {
    this.context.clearError()
    ScribeApiService.getScribeScribbles()
      .then(this.context.setScribbles)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearScribe()
  }

  renderScribe() {
    const { scribe, scribbles } = this.context
    return <CurrentScribeReview
      date={scribe.date_created}
      scribeId={scribe.id}
      scribbles={scribbles}
      onDelete={this.handleScribbleDelete}
    />
  }

  render() {
    const { error } = this.context
    return (
      <Section className="ScribeReviewView">
        <h3>Current Scribe Review Page</h3>
        {error
          ? <p className="error">No scribes to review today</p>
          : this.renderScribe()}
      </Section>
    );
  }
}


