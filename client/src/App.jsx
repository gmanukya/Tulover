import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WrapperComponent from './containers/WrapperComponent'
import Home from './containers/Home'

class App extends Component {
    render() {
        return (
            <Router>
                <WrapperComponent>
                    <Route path="/" component={Home} />
                </WrapperComponent>
                {/* <Route path="/stockholder/:stockholderId" component={Stockholder} /> */}
            </Router>
        )
    }
}

export default App
