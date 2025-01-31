import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from '../../Components/NewsItem/NewsItem'
import Spinner from '../../Components/Spinner/Spinner';

// Dumy Data
// import articlesJson from '../../../sample.json';

export default class NewsComponent_Using_Spinner extends Component {

    static defaultProps = {
        pageSize: 20,
        country: '',
        category: 'general',
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    // apiKey = ''; // For Development
    apiKey = '32ef4db84abf40de9525a1616da0c9c3';
    url = 'https://newsapi.org/v2/top-headlines'; // For Top Heading

    // Function To Fetch API
    topNewsHeadLine = async () => {
        const URI = `${this.url}?apiKey=${this.apiKey}&country=${this.props.country}&category=${this.props.category}&language=en&pageSize=${this.state.pageSize}&page=${this.state.page}`;

        // console.log(URI);

        this.setState({
            loading: true,
        });

        try {
            const response = await fetch(URI, {
                method: 'GET',
            });

            const resData = await response.json();
            // console.log({ page: this.state.page, resData });

            if (resData.status === "ok") {
                this.setState({
                    articles: resData.articles,
                    totalResults: resData.totalResults,
                    loading: false,
                })
            }
            else if (resData.status === 'error')
                this.setState({
                    error: resData.message,
                    loading: false,
                })
        } catch (err) {
            this.setState({
                loading: false,
            });

            alert("Internal Server Error");
        }
    }

    // Function to Concat Articles
    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        // console.log(this.state.page);
        
        // Fetching
        const URI = `${this.url}?apiKey=${this.apiKey}&country=${this.props.country}&category=${this.props.category}&language=en&pageSize=${this.state.pageSize}&page=${nextPage}`;

        // console.log(URI);

        try {
            const response = await fetch(URI, {
                method: 'GET',
            });

            const resData = await response.json();
            // console.log({ page: this.state.page, resData });

            if (resData.status === "ok") {
                this.setState({
                    articles: this.state.articles.concat(resData.articles),
                    totalResults: resData.totalResults,
                    page: nextPage,
                })
            }
            else if (resData.status === 'error')
                this.setState({
                    error: resData.message,
                })
        } catch (err) {
            alert("Internal Server Error");
        }
    }

    constructor(props) {
        super(props);
        // console.log(this);

        this.state = {
            articles: [],
            page: 1,
            pageSize: props.pageSize,
            totalResults: 0,
            loading: true,
            error: ''
        }
    }

    componentDidMount() {
        this.topNewsHeadLine();

        const category = this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1);
        if (this.props.category === '' || this.props.category === null) {
            document.title = "News Monster - Daily News Updates";
        }
        else {
            document.title = `News Monster - ${category} Updates`;
        }
    }

    render() {

        // For Development
        // if (!this.state.articles.length) {
        //     this.state.articles = articlesJson.articles;
        // }

        return (
            <>

                <div className='fs-3 text-center my-3 fw-bolder'>
                    News Monster - Top News Headline
                    {
                        this.props.category && <> on {this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1)}</>
                    }
                </div>

                {this.state.error && <p>{this.state.error}</p>}

                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        // (this.state.articles.length !== this.state.totalResults)
                        this.state.page < Math.ceil(this.state.totalResults / this.state.pageSize)
                    }
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((article, index) => {
                                const { title, description, author, publishedAt, urlToImage, url, source } = article;

                                return (
                                    <div className="col-md-4" key={index} >
                                        <NewsItem
                                            title={(!title) ? "" : title.slice(0, 45)}
                                            description={(description === null) ? "" : description.slice(0, 88)}
                                            author={author}
                                            publishedAt={publishedAt}
                                            urlToImage={urlToImage}
                                            url={url}
                                            source={source}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}