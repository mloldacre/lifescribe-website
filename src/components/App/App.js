import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import LoginSignup from '../LoginSignup/LoginSignup'
import Demo from '../Demo/Demo'
import NotFound from '../NotFound/NotFound'
import Contact from '../Contact/Contact';
import About from '../About/About';
import ScribeCalendarView from '../../routes/ScribeCalendarView'
import './App.css';


export default class App extends React.Component {
  render() {

    return (
      <main className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/loginSignup' component={LoginSignup} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/demo' component={Demo} />
          <Route path='/scribesCalendar' component={ScribeCalendarView}/>
          <Route component={NotFound} />
        </Switch>

        <Footer />

      </main>
    );
  }
}
