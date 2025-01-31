import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import NewsComponent from './Layout/News/NewsComponent'
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
    pageSize = 20;

    state = {
        progress: 0,
    }

    setProgress = (progress) => {
        this.setState({
            progress: progress,
        })
    }

    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                        height={3}
                    // onLoaderFinished={() => setProgress(0)}
                    />
                    <Routes>
                        <Route path='/' element={
                            <NewsComponent setProgress={this.setProgress} pageSize={this.pageSize} country={''} category={''} />
                        } />
                        <Route path='/sports' element={
                            <NewsComponent setProgress={this.setProgress} key={'sports'} pageSize={this.pageSize} country={''} category={'sports'} />
                        } />
                        <Route path='/science' element={
                            <NewsComponent setProgress={this.setProgress} key={'science'} pageSize={this.pageSize} country={''} category={'science'} />
                        } />
                        <Route path='/business' element={
                            <NewsComponent setProgress={this.setProgress} key={'business'} pageSize={this.pageSize} country={''} category={'business'} />
                        } />
                        <Route path='/technology' element={
                            <NewsComponent setProgress={this.setProgress} key={'technology'} pageSize={this.pageSize} country={''} category={'technology'} />
                        } />
                        <Route path='/health' element={
                            <NewsComponent setProgress={this.setProgress} key={'health'} pageSize={this.pageSize} country={''} category={'health'} />
                        } />
                        <Route path='/entertainment' element={
                            <NewsComponent setProgress={this.setProgress} key={'entertainment'} pageSize={this.pageSize} country={''} category={'entertainment'} />
                        } />
                    </Routes>
                </Router>
            </>
        )
    }
}
