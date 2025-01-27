import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import NewsComponent from './Layout/News/NewsComponent'

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <NewsComponent />
            </>
        )
    }
}
