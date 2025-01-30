import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import NewsComponent from './Layout/News/NewsComponent'

export default class App extends Component {

    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={
                            <NewsComponent pageSize={20} country={''} category={''} />
                        } />
                        <Route path='/sports' element={
                            <NewsComponent key={'sports'} pageSize={20} country={''} category={'sports'} />
                        } />
                        <Route path='/science' element={
                            <NewsComponent key={'science'} pageSize={20} country={''} category={'science'} />
                        } />
                        <Route path='/business' element={
                            <NewsComponent key={'business'} pageSize={20} country={''} category={'business'} />
                        } />
                        <Route path='/technology' element={
                            <NewsComponent key={'technology'} pageSize={20} country={''} category={'technology'} />
                        } />
                        <Route path='/health' element={
                            <NewsComponent key={'health'} pageSize={20} country={''} category={'health'} />
                        } />
                        <Route path='/entertainment' element={
                            <NewsComponent key={'entertainment'} pageSize={20} country={''} category={'entertainment'} />
                        } />
                    </Routes>
                </Router>
            </>
        )
    }
}
