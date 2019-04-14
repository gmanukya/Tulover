import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WrapperComponent from './containers/WrapperComponent'
import Home from './containers/Home'
import Transaction from './containers/Transaction'

class App extends Component {
    render() {
        return (
            <Router>
                <WrapperComponent>
                    <Route exact path="/" component={Home} />
                    <Route path="/transaction" component={Transaction} />
                </WrapperComponent>
                {/* <Route path="/stockholder/:stockholderId" component={Stockholder} /> */}
            </Router>
        )
    }
}

export default App
