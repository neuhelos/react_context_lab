import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import WeatherProvider from './Providers/WeatherProvider'


function App() {
  return (
    <div className="WeatherApp">
            <NavBar />
            <Switch>
            <Route eaxct path={'/Home'} >
                <Home />
            </Route>
            <Route exact path={'/Weather'}>
              <WeatherProvider value={0}>
                <WeatherZone/>
              </WeatherProvider>
            </Route>
            <Route path={'/*'}> 
                <ErrorPage />
            </Route>
            </Switch>
    </div>
    )
}

export default App;
