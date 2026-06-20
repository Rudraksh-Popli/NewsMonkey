import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);
    const capitalizeFirstCharacter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    document.title = `${capitalizeFirstCharacter(props.category)} - NewsMonkey`;
    const updateNews = async (page) => {
        props.setProgress(10);
        setLoading(true);
        const url =
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setPage(page);
        setTotalArticles(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews(1);
    }, [])
    const updateNewsFurther = async (page) => {
        const url =
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page);
        setArticles(articles.concat(parsedData.articles))
        setTotalArticles(parsedData.totalResults);
    }
    const fetchMoreData = async () => {
        updateNewsFurther(page + 1);
    };
    return (
        <>
            <h2 className='text-center my-3'>NewsMonkey - Top {capitalizeFirstCharacter(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : ""}
                                    description={element.description ? element.description : ""}
                                    imageURL={element.urlToImage}
                                    newsURL={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News;
