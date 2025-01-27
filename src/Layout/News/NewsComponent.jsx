import React, { Component } from 'react'
import NewsItem from '../../Components/NewsItem/NewsItem'

export default class NewsComponent extends Component {


    apiKey = '32ef4db84abf40de9525a1616da0c9c3';
    url = 'https://newsapi.org/v2/top-headlines'; // For Top Heading

    async topNewsHeadLine() {
        const URI = `${this.url}?apiKey=${this.apiKey}&language=en`;
        this.setState({
            loading: true,
        });

        try {
            const response = await fetch(URI, {
                method: 'GET',
            });

            const resData = await response.json();
            if (resData.status === "ok") {
                this.setState({
                    articles: resData.articles,
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


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
        this.topNewsHeadLine();
    }

    render() {
        return (
            <>
                <div className='container mx-5 my-3'>
                    <div className='fs-3 text-center my-3 fw-bolder'>
                        News Monster - Top News Headline
                    </div>
                    <div className="row">
                        {this.state.articles.map((article, index) => {
                            const { title, description, urlToImage, url } = article;
                            
                            return (
                                <div className="col-md-4" key={index} >
                                    <NewsItem
                                        title={title.slice(0,45)}
                                        description={description.slice(0,88)}
                                        urlToImage={urlToImage}
                                        url={url}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}