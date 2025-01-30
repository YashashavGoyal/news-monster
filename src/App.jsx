import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import NewsComponent from './Layout/News/NewsComponent'

export default class App extends Component {
    pageSize = 20;

    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={
                            <NewsComponent pageSize={this.pageSize} country={''} category={''} />
                        } />
                        <Route path='/sports' element={
                            <NewsComponent key={'sports'} pageSize={this.pageSize} country={''} category={'sports'} />
                        } />
                        <Route path='/science' element={
                            <NewsComponent key={'science'} pageSize={this.pageSize} country={''} category={'science'} />
                        } />
                        <Route path='/business' element={
                            <NewsComponent key={'business'} pageSize={this.pageSize} country={''} category={'business'} />
                        } />
                        <Route path='/technology' element={
                            <NewsComponent key={'technology'} pageSize={this.pageSize} country={''} category={'technology'} />
                        } />
                        <Route path='/health' element={
                            <NewsComponent key={'health'} pageSize={this.pageSize} country={''} category={'health'} />
                        } />
                        <Route path='/entertainment' element={
                            <NewsComponent key={'entertainment'} pageSize={this.pageSize} country={''} category={'entertainment'} />
                        } />
                    </Routes>
                </Router>
            </>
        )
    }
}
