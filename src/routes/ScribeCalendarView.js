/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ScribeApiService from '../services/scribe-api-service';
import ScribeContext from '../contexts/ScribeContext';
import { Section } from '../components/Utils/Utils';
import Calendar from '../components/Calendar/Calendar';
import BackButton from '../components/BackButton/BackButton';
import '../Style.css';

export default class ScribeCalendarView extends Component {
	static contextType = ScribeContext;

	componentDidMount() {
		this.context.clearError();
		ScribeApiService.getScribesByUser().then(this.context.setScribes).catch(this.context.setError);
	}

	renderScribes() {
		const { scribes = [] } = this.context;
		return scribes.map((scribe) => <Calendar key={scribe.id} scribe={scribe} />);
	}

	render() {
		const { error } = this.context;
		return (
			<Section list className='ScribeCalendarView'>
				<h2>Previous Scribes</h2>
				{error ? <p className='error'>There was an error, try again</p> : this.renderScribes()}
				<BackButton />
			</Section>
		);
	}
}
