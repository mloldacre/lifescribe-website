import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Demo from '../Demo/Demo';
import NotFound from '../NotFound/NotFound';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Profile from '../Profile/Profile';
import ActiveUserView from '../../routes/ActiveUserView';
import Login from '../../routes/Login';
import Registration from '../Registration/Registration';
import ScribeCalendarView from '../../routes/ScribeCalendarView';
import ScribeReviewView from '../../routes/ScribeReviewView';
import CurrentScribeEntry from '../CurrentScribeEntry/CurrentScribeEntry';
import EditUserView from '../../routes/EditUserView';
import '../../Style.css';

export default class App extends React.Component {
	render() {
		return (
			<main className='App'>
				<Route component={Header} />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<PublicRoute path='/loginRegister' component={Login} />
					<PublicRoute path='/demo' component={Demo} />
					<PublicRoute path='/registration' component={Registration} />
					<PrivateRoute path='/loggedIn' component={ActiveUserView} />
					<PrivateRoute path='/profile' component={Profile} />
					<PrivateRoute path='/scribesCalendar/' component={ScribeCalendarView} />
					
					{/* \/ Used to previous Scribes \/ */}
					<PrivateRoute path='/scribeReview/:scribeId' component={ScribeReviewView} />
					
					{/* \/ Used to review Scribe for current day \/ */}
					<PrivateRoute exact path='/scribeReview/' component={ScribeReviewView} /> 
					
					{/* \/ Used to enter a Scribble for current day \/ */}
					<PrivateRoute exact path='/scribbleEntry/' component={CurrentScribeEntry} />
					
					{/* \/ Used to edit a Scribble for a previous Scribe \/ */}
					<PrivateRoute path='/scribbleEntry/:scribbleId' component={CurrentScribeEntry} />
					<PrivateRoute path='/editProfile' component={EditUserView} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</main>
		);
	}
}
