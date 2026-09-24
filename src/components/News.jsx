import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 12,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    state = {
        articles: [],
        loading: false,
        page: 1,
        hasMore: true
    }

    updateNews = async (pageNumber) => {

        this.props.setProgress(20);

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&page=${pageNumber}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        let data = await fetch(url);

        this.props.setProgress(40);

        let parsedData = await data.json();
        console.log(parsedData);

        this.props.setProgress(70);

        this.setState({
            articles: parsedData.articles,
            loading: false
        });

        this.props.setProgress(100);

        return parsedData.articles.length;
    }

    async componentDidMount() {

        document.title = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - News";

        this.updateNews(1);
    }

    handlePrevClick = async () => {

        let page = this.state.page - 1;

        await this.updateNews(page);

        this.setState({
            page: page,
            hasMore: true
        });

        window.scrollTo({ top: 0, behavior: "instant" });
    }

    handleNextClick = async () => {

        let page = this.state.page + 1;

        let articlesLength = await this.updateNews(page);

        if (articlesLength === 0) {
            this.setState({
                hasMore: false
            });
        } else {
            this.setState({
                page: page
            });

            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }

    render() {
        return (

            <div className="container my-3 pt-5">
                <h1 className="news-heading"><center>NewsPulse - Top HeadLines from {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</center></h1>
                <br />

                {this.state.loading && <Spinner />}

                <div className="row">

                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 d-flex justify-content-center" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name} />

                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Prev</button>
                    <button disabled={!this.state.hasMore} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
