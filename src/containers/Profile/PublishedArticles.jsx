import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAuthorArticles } from "../../actions/articleActions";


class PublishedArticles extends Component {
  componentWillMount() {
    this.props.getAuthorArticles();
  };

  render() {
    const articleItems = this.props.articles.map(article => (
      <div key={article.id}>
        <li className="media">
          <img className="d-flex mr-3 profile-card-image" src={article.image_url} alt="" />
          <div className="media-body">
            <a href="article.html">
              <h5 className="mt-0 mb-1 font-weight-bold">{article.title}</h5>
            </a>
            {article.description}
          </div>
          <Link to={`/edit_article/${article.id}`} className="btn btn-info btn-md pull-right" type="submit">Edit</Link>
          <button className="btn btn-danger btn-md pull-right" type="submit">Delete</button>
          
        </li>


        {/* <h3 className="alert-primary">{article.title}</h3>
        <button className="btn btn-primary" onClick={
            this.onGetArticleClick.bind(this, article.id)
        }>click</button>
        <p>{article.body}</p> */}
      </div>
    ));
    return (
      <div className="col-md-8 mb-4">

        <div className="card-header">Published Articles</div>
        <div className="card-body">

          <ul className="list-unstyled">
            { articleItems }
          </ul>

        </div>
      </div>
    );
  }
}
const mapStateToProps = ({articleReducer}) => ({
  articles: articleReducer.articles
});
const mapActionsToProps = dispatch => ({
  getAuthorArticles: () => dispatch(getAuthorArticles())
});
export default connect(
  mapStateToProps,
  mapActionsToProps
)(PublishedArticles);
