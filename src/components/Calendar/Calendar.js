import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import '../../Style.css';

// Component to render a like to a previous Scribe in the ScribeCalendarView route
export default class Calendar extends Component {
	render() {
		const { scribe } = this.props;
		return (
			<div className='ScribeInCalendar'>
				<Link to={`/scribeReview/${scribe.id}`} className='Calendar'>
					{moment(scribe.date_created).format('MM/DD/YYYY')}
				</Link>
			</div>
		);
	}
}
