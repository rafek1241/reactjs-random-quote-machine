import * as React from "react";


export default class NewQuoteButton extends React.Component<{onClick:()=>void}> {

  render() {
    return (
      <button
        id="new-quote"
        className="btn btn-light btn-sm float-right"
        onClick={this.props.onClick}
      >
        New quote
      </button>
    );
  }
}
