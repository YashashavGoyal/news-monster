import React, { Component } from 'react';
import NewsImg from '../../assets/img/News-default.jpeg'

export default class NewsItem extends Component {

    render() {

        let { title, description, author, publishedAt, urlToImage, url, source } = this.props;

        const date = new Date(publishedAt);
        const publishedTime = date.toGMTString();
        // console.log(source)

        return (
            <>
                <div className="card m-2" style={{ width: '18rem' }}>
                    <img src={(!urlToImage) ? NewsImg : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        { source.name && <span className="badge bg-secondary">{source.name}</span>}
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text">{description}...</p>

                        {
                            <p className="card-text">
                                <small className="text-muted">
                                    By {(author) ? author : "Unknown"}
                                </small>
                            </p>
                        }

                        {
                            publishedAt && <p className="card-text">
                                <small className="text-muted">
                                    Last updated At {publishedTime.replace(" GMT", "")}
                                </small>
                            </p>
                        }
                        <a href={url} target='_blank' className="btn btn-dark btn-sm">Go To Actual Article</a>
                    </div>
                </div>
            </>
        )
    }
}  
