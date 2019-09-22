import React from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";

class MultiSelect extends React.Component {
  onSelected = client => {
    console.log("onSelected", client);
    this.props.onSelectionChange(client);
  };

  render() {
    if (!Array.isArray(this.props.clients)) {
      return null;
    }

    return (
      <React.Fragment>
        {this.props.clients.map(client => (
          <div className="item">
            <div className="content">
              <Checkbox client={client} onSelected={this.onSelected} />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default connect(null)(MultiSelect);
