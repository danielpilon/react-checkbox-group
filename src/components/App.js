import React from "react";
import { connect } from "react-redux";
import MultiSelect from "./MultiSelect";
import { fetchClients, toogleChecked as toggleChecked } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  onSelectionChange = client => {
    console.log("onSelectionChange", client);
    this.props.toogleChecked(client);
  };

  render() {
    return (
      <div>
        <MultiSelect
          clients={this.props.clients}
          onSelectionChange={this.onSelectionChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { clients: state.clients };
};

export default connect(
  mapStateToProps,
  { fetchClients, toogleChecked: toggleChecked }
)(App);
