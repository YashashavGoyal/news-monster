import React, { Component } from 'react'
import NewsItem from '../../Components/NewsItem/NewsItem'

import newsImg from '../../assets/img/News-default.jpeg';

export default class NewsComponent extends Component {


    apiKey = '32ef4db84abf40de9525a1616da0c9c3';
    url = 'https://newsapi.org/v2/top-headlines'; // For Top Heading

    // Function To Fetch API
    topNewsHeadLine = async () => {
        const URI = `${this.url}?apiKey=${this.apiKey}&language=en&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        console.log(URI);

        this.setState({
            loading: true,
        });

        try {
            const response = await fetch(URI, {
                method: 'GET',
            });

            const resData = await response.json();
            console.log(resData);

            if (resData.status === "ok") {
                this.setState({
                    articles: resData.articles,
                    totalResults: resData.totalResults,
                })
            }

            this.setState({
                loading: false,
            });
        } catch (err) {
            this.setState({
                loading: false,
            });

            alert("Internal Server Error");
        }
    }

    handlePrevClick = () => {

        this.setState({
            page: --this.state.page,
        });

        this.topNewsHeadLine();
    }

    handleNextClick = () => {

        const pageNum = this.state.page;
        // console.log(pageNum+1);
        // console.log(Math.ceil(this.state.totalResults / this.state.pageSize));

        if (pageNum + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
            return
        }
        else {
            this.setState({
                page: ++this.state.page,
            });

            this.topNewsHeadLine();

            if (!this.state.articles.length) {
                this.setState({
                    page: --this.state.page,
                });
                this.topNewsHeadLine();
            }
        }
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            pageSize: 20,
            loading: false,
        }
    }

    componentDidMount() {
        this.topNewsHeadLine();

    }

    render() {
        // console.log(this.state.articles);
        return (
            <>
                <div className='container my-3'>
                    <div className='fs-3 text-center my-3 fw-bolder'>
                        News Monster - Top News Headline
                    </div>
                    <div className="row">
                        {this.state.articles.map((article, index) => {
                            const { title, description, urlToImage, url } = article;

                            return (
                                <div className="col-md-4" key={index} >
                                    <NewsItem
                                        title={(!title) ? "" : title.slice(0, 45)}
                                        description={(description === null) ? "" : description.slice(0, 88)}
                                        urlToImage={(!urlToImage) ? newsImg : urlToImage}
                                        url={url}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container my-2">
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page <= 1}
                            onClick={this.handlePrevClick}
                        >&larr; prev</button>
                        <button type="button" className="btn btn-dark" disabled>
                            {this.state.page}
                        </button>
                        <button type="button" className="btn btn-dark"
                            onClick={this.handleNextClick}
                        >next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}