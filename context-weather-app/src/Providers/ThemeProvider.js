import React, {createContext} from 'react'

const ThemeContext = createContext()

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={"light"}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
