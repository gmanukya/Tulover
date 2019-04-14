import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WrapperComponent from './containers/WrapperComponent'
import Home from './containers/Home'
import Transaction from './containers/Transaction'
import Stockholder from './containers/Stockholder'

class App extends Component {
    render() {
        return (
            <Router>
                <WrapperComponent>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/transaction" component={Transaction} />
                    <Route exact path="/stockholder/:stockholderId" component={Stockholder} />
                </WrapperComponent>
            </Router>
        )
    }
}

export default App
