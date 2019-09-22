import React from "react";
import { connect } from "react-redux";
import MultiSelect from "./MultiSelect";
import { fetchClients, toggleChecked } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  onSelectionChange = client => {
    console.log("onSelectionChange", client);
    this.props.toggleChecked(client);
  };

  render() {
    if (!Array.isArray(this.props.clients)) {
      return null;
    }
    return (
      <div>
        <div className="ui divided list">
          <MultiSelect
            clients={this.props.clients}
            onSelectionChange={this.onSelectionChange}
          />
        </div>
        <div class="ui blue labels">
          {this.props.clients
            .filter(client => client.checked)
            .map(client => {
              return (
                <a
                  class="ui label"
                  onClick={() => this.onSelectionChange(client)}
                >
                  {client.name} <i class="icon close"></i>
                </a>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { clients: state.clients };
};

export default connect(
  mapStateToProps,
  { fetchClients, toggleChecked }
)(App);
