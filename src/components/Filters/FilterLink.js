import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/actionCreators";
import Link from "./Link";

class FilterLink extends Component {
  handleFilterClick = e => {
    const { setVisibilityFilter, filter } = this.props;
    e.preventDefault();
    setVisibilityFilter(filter);
  };

  render() {
    const { filter, currentFilter, children } = this.props;
    return currentFilter === filter ? (
      <span>{children}</span>
    ) : (
      <Link onClick={e => this.handleFilterClick(e)}>{children}</Link>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(null, mapDispatchToProps)(FilterLink);
