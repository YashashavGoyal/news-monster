import React, { Component } from 'react'
import NewsItem from '../../Components/NewsItem/NewsItem'

export default class NewsComponent extends Component {



    render() {
        return (
            <>
                <div>NewsComponent</div>
                <NewsItem title='hii' decription='hii' url='/' urlToImage='/' />
            </>
        )
    }
}