/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeContext from '../contexts/ScribeContext';
import { Section } from '../components/Utils/Utils';
import CurrentScribeReview from '../components/CurrentScribeReview/CurrentScribeReview';
import BackButton from '../components/BackButton/BackButton';

// Displays list of Scribbles attached to a Scribe,
// uses CurrentScribeReview component to render scribbles 
export default class ScribeReviewView extends Component {
	static defaultProps = {
		match: { params: {} },
	};

	static contextType = ScribeContext;

	componentDidMount() {
		const { match } = this.props;
		const { params } = match;
		this.context.clearError();
		if (params.scribeId) {
			const { scribes } = this.context;
			const scribeIndex = scribes.findIndex((s) => s.id === parseInt(params.scribeId));
			this.context.setScribe(scribes[scribeIndex]);

			return ScribeApiService.getScribblesForScribe(params.scribeId)
				.then(this.context.setScribbles)
				.catch(this.context.setError);
		}

		ScribeApiService.getScribeScribbles().then(this.context.setScribbles).catch(this.context.setError);
	}

	componentWillUnmount() {
		this.context.clearScribe();
	}

	handleScribbleDelete = (scribbleId) => {
		ScribeApiService.deleteScribble(scribbleId)
			.then(() => {
				this.context.clearError();
				this.context.deleteScribble(scribbleId);
			})
			.catch(this.context.setError);
	};

	renderScribe() {
		const { scribe, scribbles } = this.context;
		if (!scribe) {
			return null;
		}
		return (
			<CurrentScribeReview
				className='CurrentScribeReview'
				date={scribe.date_created}
				scribeId={scribe.id}
				scribbles={scribbles}
				onDelete={this.handleScribbleDelete}
			/>
		);
	}

	render() {
		const { error } = this.context;

		return (
			<Section className='ScribeReviewView'>
				<h2>{this.props.match.params.scribeId ? 'Previous ' : 'Current '}Scribe</h2>
				{error ? <p className='error'>No scribes to review today</p> : this.renderScribe()}
				<BackButton />
			</Section>
		);
	}
}
