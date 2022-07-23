import "./Form.scss";
import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const { title, content, author, handleClick } = props;

  return (
    <section className="wrapper">
      <header className="wrapper__title">{title}</header>
      <div className="wrapper__content">
        <div className="quote-area">
          <i className="fa fa-quote-left"></i>
          <p className="quote-area__quote">{content}</p>
          <i className="fa fa-quote-right"></i>
        </div>
        <div className="author">
          <span>__</span>
          <span className="author__name">{author}</span>
        </div>
      </div>
      <div className="button">
        <button className="next-quote" onClick={handleClick}>
          Next Quote
        </button>
      </div>
    </section>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

Form.defaultType = {
  title: "",
  content: "",
  author: "",
};

export default Form;
