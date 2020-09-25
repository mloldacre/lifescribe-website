import React, { Component } from 'react';
import ScribeApiService from '../../services/scribe-api-service';
import ScribeContext from '../../contexts/ScribeContext';
import { Section } from '../Utils/Utils'
import moment from 'moment-timezone';
import BackButton from '../BackButton/BackButton'
import '../../Style.css';

export default class CurrentScribeEntry extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ScribeContext

  componentDidMount() {
    const { match } = this.props
    const { params } = match
    if (params.scribbleId) {
      ScribeApiService.getScribbleById(params.scribbleId)
        .then(scribble => this.setState({ scribble }))
    }
    this.context.clearError()
    ScribeApiService.getCurrentScribe()
      .then(this.context.setScribe)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearScribe()
  }

  onHandleSubmit = ev => {
    ev.preventDefault()
    //look for params like at the top, if they exist, do API call to edit(PATCH)
    //endpoint
    const { match } = this.props
    const { params } = match
    const { scribe } = this.context
    const { text } = ev.target
    if (params.scribbleId) {
      ScribeApiService.updateScribble(params.scribbleId, text.value) //add edit API call here!!!!!!!!
        .then(scribble => this.setState({ scribble }))
        .then(() => {
          text.value = ''
        })
    } else {
      ScribeApiService.postScribble(scribe.user_id, scribe.id, text.value)
        .then(this.context.addScribble)
        .then(() => {
          text.value = ''
        })
        .catch(this.context.setError)
    }
  }

  render() {
    const { scribble } = this.context
    const { scribe } = this.context
    return (
      <Section className="ScribeEntryView">
        <h2>Your Thoughts</h2>
        {moment(scribe.date_created).format('MM/DD/YYYY')}
        <form
          className="ScribbleEntryForm"
          onSubmit={this.onHandleSubmit}
        >
          <fieldset>
            <legend>Scribbles</legend>
            <article className="TextScribble">
              <textarea
                id="text"
                name="text"
                placeholder={scribble && scribble.scribble_content ? scribble.scribble_content : 'Enter a text scribble!'}
                defaultValue={scribble && scribble.scribble_content ? scribble.scribble_content : ''}>
              </textarea>
            </article>
            <button type="submit">
              Submit
          </button>
          </fieldset>
        </form>
        <BackButton />
      </Section>
    )
  }
}

//{moment(scribe.date_created).tz('America/New_York').format('MM/DD/YYYY hh:mm a')}

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
// {/* <article className="MediaScribbles">
//             <textarea
//               id="media"
//               name="media"
//               placeholder="Upload a video, pic, or audio scribble!">
//             </textarea>
//           </article>
//           <button type="submit">
//             Upload
//             </button> */}