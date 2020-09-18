import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Demo from '../Demo/Demo'
import NotFound from '../NotFound/NotFound'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Profile from '../Profile/Profile';
import ActiveUserView from '../../routes/ActiveUserView'
import Login from '../../routes/Login'
import NewSignup from '../NewSignup/NewSignup'
import ScribeCalendarView from '../../routes/ScribeCalendarView'
import ScribeReviewView from '../../routes/ScribeReviewView';
import CurrentScribeEntry from '../CurrentScribeEntry/CurrentScribeEntry';
import EditUserView from '../../routes/EditUserView'
import '../../Style.css';


export default class App extends React.Component {
  render() {

    return (
      <main className="App">
        <Route component={Header}/>

        <Switch>
          <Route exact path='/' component={Landing} />
          <PublicRoute path='/loginSignup' component={Login} />
          <PublicRoute path='/contact' component={Contact} />
          <PublicRoute path='/about' component={About} />
          <PublicRoute path='/demo' component={Demo} />
          <PublicRoute path='/signup' component={NewSignup} />
          <PrivateRoute path='/loggedIn' component={ActiveUserView}/>
          <PrivateRoute path='/profile' component={Profile}/>
          <PrivateRoute path='/scribesCalendar/' component={ScribeCalendarView}/>
          <PrivateRoute path='/scribeReview/' component={ScribeReviewView}/>
          <PrivateRoute exact path='/scribbleEntry/' component={CurrentScribeEntry}/>
          <PrivateRoute path='/scribbleEntry/:scribbleId' component={CurrentScribeEntry}/>
          <PrivateRoute path='/editProfile' component={EditUserView}/>
          <Route component={NotFound} />
        </Switch>

        <Footer />

      </main>
    );
  }
}
