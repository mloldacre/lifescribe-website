import React, { Component } from 'react';
import ScribeApiService from '../../services/scribe-api-service';
import ScribeContext from '../../contexts/ScribeContext';
import { Section } from '../Utils/Utils'
import './CurrentScribeEntry.css';

export default class CurrentScribeEntry extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ScribeContext

  componentDidMount() {
    const { scribeId } = this.props.match.params
    this.context.clearError()
    ScribeApiService.getScribeById(scribeId)
      .then(this.context.setScribe)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearScribe()
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { scribe } = this.context
    const { text } = ev.target
    ScribeApiService.postScribble(scribe.user_id, scribe.id, text.value)
      .then(this.context.addScribble)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    const { scribe } = this.context
    return (
      <Section className="ScribeEntryView">
        <h2>Your Thoughts</h2>
        {scribe.date_created}
        <form
          className="ScribbleEntryForm"
          onSubmit={this.handleSubmit}
        >
          <article className="TextScribble">
            <textarea
              id="text"
              name="text"
              placeholder="Enter a text scribble!">
            </textarea>
          </article>
          <button type="submit">
            Submit
          </button>
          <article className="MediaScribbles">
            <textarea
              id="media"
              name="media"
              placeholder="Upload a video, pic, or audio scribble!">
            </textarea>
          </article>
          <button type="submit">
            Upload
            </button>
        </form>
      </Section>
    )

  }
  
  //TODO Decide what to render and where to navigate after submission
  // render() {
  //   const { error } = this.context
  //   return (
  //     <h1 className="CurrentScribeEntry">
  //       <button type="submit">
  //         Previous Scribes
  //     </button>
  //       Current Scribe Entry Page
  //       {error
  //         ? <p className="error">There was an error on the Scribe Entry Page</p>
  //         : this.renderEntryView()}
  //       <button type="submit">
  //         Review Scribe
  //     </button>
  //     </h1>
  //   );
  // }
}

