import React, { Component } from 'react'
import NewsItem from '../../Components/NewsItem/NewsItem'

export default class NewsComponent extends Component {


    render() {
        return (
            <>
                <div className='container mx-5 my-3'>
                    <div className='fs-3 text-center my-3 fw-bolder'>
                        News Monster - Top News Headline
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem title='hii' decription='hii' url='/' urlToImage='/' />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title='hii' decription='hii' url='/' urlToImage='/' />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title='hii' decription='hii' url='/' urlToImage='/' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}