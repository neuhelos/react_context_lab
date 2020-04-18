import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import ThemeProvider from './Providers/ThemeProvider'

import NavBar from './Components/NavBar'
import Home from './Components/Home'

import WeatherProvider from './Providers/WeatherProvider'
import WeatherZone from './Components/WeatherZone'

import ErrorPage from './Components/ErrorPage'

const WeatherApp = () => {
  return (
      <div className="WeatherApp">
              <ThemeProvider>
                <NavBar/>
                <Switch>
                <Route eaxct path={'/Home'} >
                    <Home />
                </Route>
                <Route exact path={'/Weather'}>
                  <WeatherProvider>
                    <WeatherZone/>
                  </WeatherProvider>
                </Route>
                <Route path={'/*'}> 
                    <ErrorPage />
                </Route>
                </Switch>
              </ThemeProvider>
      </div>
    )
}

export default WeatherApp;
