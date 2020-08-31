import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Landing from './Landing/Landing'
import './App.css';


export default class App extends React.Component {
  render(){
    
    return (
      <main className="App">
        <Header/>
        <Landing/>
        {/* <Route path='/' component={Landing} />  */}
        <Footer/>
      </main>
    );
  }
  
}
