import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
        <div className="card my-2">
            <img src={imageURL ? imageURL : "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/03/breaking-1614559690.jpg"}
                className="card-img-top" alt="Not Available" />
            <div className="card-body">
                <h6><span class="badge text-bg-secondary">{source ? source : "Unknown"}</span></h6>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By: {author ? author : "Unknown"} on {new Date(date).toLocaleString()}</small></p>
                <a href={newsURL} target='blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem;
