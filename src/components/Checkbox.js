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
      <input
        type="checkbox"
        checked={this.props.client.checked}
        onChange={() => this.props.onSelected(this.props.client)}
      />
    );
  }
}

export default connect(null)(Checkbox);
