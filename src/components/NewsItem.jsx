import React, { Component } from "react";
import dailyNews from "../assets/dailyNews.png";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div>
                <div className="card my-4" style={{ width: "18rem", borderWidth: "1.1px", borderColor: "#798084" }}>
                    <img
                        src={imageUrl || dailyNews}
                        onError={(e) => {
                            e.target.src = dailyNews
                        }}
                        className="card-img-top"
                        alt="Image not loading"
                        style={{ height: "165px", objectFit: "cover" }} />

                    <div className="card-body">

                        <span
                            className="badge rounded-pill text-bg-danger"
                            style={{
                                maxWidth: "100%",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                display: "inline-block"
                            }}>

                            {source ? source : "----"}

                        </span>

                        <hr />

                        <h5 className="card-title" style={{ height: "75px", overflow: "hidden" }}>{title}</h5>

                        <p className="card-text" style={{ height: "75px", overflow: "hidden" }}>{description}</p>

                        <p
                            className="card-text"
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            }}>
                            <small
                                className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                            </small>
                        </p>

                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;