import React, { Component } from 'react';
import NewsImg from '../../assets/Img/News-default.jpeg'

export default class NewsItem extends Component {

    render() {

        let { title, description, urlToImage, url } = this.props;

        return (
            <>
                <div className="card m-2" style={{ width: '18rem' }}>
                    <img src={(!urlToImage) ? NewsImg : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text">{description}...</p>
                        <a href={url} target='_blank' className="btn btn-dark btn-sm">Go To Actual Article</a>
                    </div>
                </div>
            </>
        )
    }
}  