import React from 'react'
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./themed-button";

// Un componente intermedio que utiliza ThemedButton.
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }));
        };
    }

    render() {
        // El botón ThemedButton dentro de ThemeProvider
        // usa el tema del estado mientras que el exterior usa
        // el tema oscuro predeterminado
        return (
           <React.Fragment>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
              
                    <ThemedButton />
              
                    </React.Fragment>
        );
    }
}

export default App;
