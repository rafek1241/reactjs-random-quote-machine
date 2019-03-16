import React, { Component } from "react";
import "./quote-box.scss";
import NewQuoteButton from "./new-quote-button";

class QuoteBox extends Component<{}, { quote: string; author: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    };

    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }

  async fetchNewQuote() {
    const res = await fetch("https://favqs.com/api/qotd");
    const json = await res.json();
    this.setState({
      quote: json.quote.body,
      author: json.quote.author
    });
  }

  async componentDidMount() {
    await this.fetchNewQuote();
  }

  render() {
    return (
      <div id="quote-box">
        <div className="container">
          <div className="row">
            <div className="col">
              <blockquote className="blockquote">
                <Text quote={this.state.quote} />
                <Author author={this.state.author} />
              </blockquote>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TweetButton
                hashtags="quotes"
                related="freecodecamp"
                text={'"' + this.state.quote + '" ' + this.state.author}
              />
            </div>
            <div className="col">
              <NewQuoteButton onClick={this.fetchNewQuote} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const TweetButton = (props: any) => (
  <a
    id="tweet-quote"
    className="btn btn-light btn-sm"
    href={`https://twitter.com/intent/tweet?hashtags=${
      props.hashtags
    }&related=${props.related}&text=${props.text}`}
  >
    <i className="fab fa-twitter" />
  </a>
);

const Text = (props: any) => (
  <p id="text" className="mb-0 text-light">
    {props.quote}
  </p>
);

const Author = (props: any) => (
  <footer className="blockquote-footer text-right text-light">
    <cite id="author" title="Oprah Winfrey">
      {props.author}
    </cite>
  </footer>
);

export default QuoteBox;
