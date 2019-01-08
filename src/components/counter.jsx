import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else {
      return this.state.tags.map((tag, index) => <li key={index}>{tag}</li>);
    }
  }
}

export default Counter;
