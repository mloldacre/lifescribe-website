import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import LoginSignup from '../LoginSignup/LoginSignup'
import Demo from '../Demo/Demo'
import NotFound from '../NotFound/NotFound'
import Contact from '../Contact/Contact';
import About from '../About/About';
import ActiveUserView from '../../routes/ActiveUserView'
import Login from '../../routes/Login'
import ScribeCalendarView from '../../routes/ScribeCalendarView'
import ScribeReviewView from '../../routes/ScribeReviewView';
import CurrentScribeEntry from '../CurrentScribeEntry/CurrentScribeEntry';
import './App.css';


export default class App extends React.Component {
  render() {

    return (
      <main className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={Landing} />
          <PublicRoute path='/loginSignup' component={Login} />
          <PublicRoute path='/contact' component={Contact} />
          <PublicRoute path='/about' component={About} />
          <PublicRoute path='/demo' component={Demo} />
          <PrivateRoute path='/loggedIn' component={ActiveUserView}/>
          <PrivateRoute path='/scribeCalendar' component={ScribeCalendarView}/>
          <PrivateRoute path='/scribeReview/:scribeId' component={ScribeReviewView}/>
          <PrivateRoute path='/scribeEntry/:scribeId' component={CurrentScribeEntry}/>
          <Route component={NotFound} />
        </Switch>

        <Footer />

      </main>
    );
  }
}
