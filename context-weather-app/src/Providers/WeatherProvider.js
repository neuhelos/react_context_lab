import React, {createContext} from 'react'

const WeatherDataContext = createContext()

const WeatherProvider = (props) => {
    return (
        <WeatherDataContext.Provider value={[]}>
            {props.children}
        </WeatherDataContext.Provider>
    )
}

export default WeatherProvider;
