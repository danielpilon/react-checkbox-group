import React from "react";
import { connect } from "react-redux";

class Checkbox extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    if (!this.props.client) {
      return null;
    }
    return (
      <div className="ui checkbox">
        <input
          type="checkbox"
          checked={this.props.client.checked}
          onChange={() => this.props.onSelected(this.props.client)}
        />
        <label key={this.props.client.id}>{this.props.client.name}</label>
      </div>
    );
  }
}

export default connect(null)(Checkbox);
