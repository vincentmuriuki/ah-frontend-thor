/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import { updateArticle, getArticleById } from "../../actions/articleActions";


class EditArticle extends Component {

    state = {
      title: "",
      imageUrl: "",
      description: "",
      body: "",
      audioUrl: "",
      tags: []
    };

    componentWillMount() {
      this.props.getArticleById(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
      const{title, image_url, description, body, audio_url, tag_list} = nextProps.articles;
      this.setState({
        title: title,
        imageUrl: image_url,
        description: description,
        body: body,
        audioUrl: audio_url,
        tags: tag_list
      });
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    onTagsChange = tags => {
      this.setState({ tags });
    };

    onSubmit = e => {
      e.preventDefault();
      const { updateArticle } = this.props;
      const {
        title,
        imageUrl,
        description,
        body,
        audioUrl,
        tags
      } = this.state;

      const article = {
        title: title,
        body: body,
        image_url: imageUrl,
        description: description,
        audio_url: audioUrl,
        tag_list: tags
      };
      updateArticle(article, this.props.match.params.id);
    };

    handleOnClick = () => {
      window.cloudinary.openUploadWidget({
        cloud_name: "ddvefqfm8",
        upload_preset: "c54qhbjn",
        cropping: true,
        folder: "team_thor",
        sources: ["local", "url", "camera", "facebook", "dropbox", "search", "instagram"],
      }, (error, result) => {
        if (result.event === "success") {
          this.setState({ imageUrl: result.info.secure_url });

        }
      });
    }

    formInputHelper = (field, inputPlaceHolder, inputName, inputType, onChange, inputValue, inputClass, inputRows) => {
      let data;
      if (field === "textInput") {
        data = (
          <input
            placeholder={inputPlaceHolder}
            name={inputName}
            type={inputType}
            onChange={onChange}
            value={inputValue}
            className={inputClass}
            required
          />
        );
      } else if (field === "textArea") {
        data = (
          <textarea
            placeholder={inputPlaceHolder}
            rows={inputRows}
            name={inputName}
            onChange={onChange}
            value={inputValue}
            className={inputClass}
            required
          />
        );
      }
      return data;
    }

    formOnClickHelper = (inputPlaceHolder, inputName, inputType, onClick, inputValue, inputClass) => (
      <input
        placeholder={inputPlaceHolder}
        name={inputName}
        type={inputType}
        onClick={onClick}
        value={inputValue}
        className={inputClass}
        readOnly
      />
    );

    render() {      
      const { title, imageUrl, description, body, audioUrl, tags } = this.state;
      
      return (
        <main className="mt-5 pt-5">
          <div className="container">
            <section className="mt-4">
              <form onSubmit={this.onSubmit}>
                <div className="text-center">
                  <div className="form-group shadow-textarea">
                    {this.formInputHelper("textInput", "Article Title", "title", "text", this.onChange, title, "form-control font-weight-bold no-border in-font", null)}
                    {this.formInputHelper("textInput", "Article Description", "description", "text", this.onChange, description, "form-control font-weight-bold no-border", null)}
                    {this.formInputHelper("textArea", "Article body...", "body", null, this.onChange, body, "form-control z-depth-1 no-border in-fontt", "20")}
                    {this.formOnClickHelper("Choose Article Image Url(Optional)", "imageUrl", "text", this.handleOnClick, imageUrl, "form-control no-border")}
                    {this.formInputHelper("textInput", "Article Audio Url(Optional)", "audioUrl", "text", this.onChange, audioUrl, "form-control no-border", null)}
                  </div>
                </div>
                <TagsInput value={tags} onChange={this.onTagsChange} />
                <button type="submit" className="btn btn-primary">
                    Publish
                </button>
              </form>
            </section>
          </div>
        </main>
      );
    }
}

const mapStateToProps = ({ articleReducer }) => ({
  articles: articleReducer.articles
});

export const mapDispatchToProps = dispatch => ({
  updateArticle: (article, id) => dispatch(updateArticle(article, id)),
  getArticleById: id => dispatch(getArticleById(id))
});

EditArticle.propTypes = {
  createArticles: propTypes.func.isRequired
  
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(EditArticle);
