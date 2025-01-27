import React, { Component } from 'react';

export default class NewsItem extends Component {
    
    render() {

        let {title, description, urlToImage, url} = this.props;

        return (
            <>
                <div className="card" style={{width: '18rem'}}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} className="btn btn-primary">Go To Actual Article</a>
                        </div>
                </div>
            </>
        )
    }
}  