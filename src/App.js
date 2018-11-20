import React, { Component } from 'react'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

class App extends Component {

    render() {
        return (
        <Subscribe to={[AppContainer]}>
            {
                app => {
                    return (<div className='App'>

                        { app.state.tick }

                        <button onClick={ _ => app.addTick() }>Add</button>

                    </div>)
                }
            }
        </Subscribe>
        )
    }
}

export default App
