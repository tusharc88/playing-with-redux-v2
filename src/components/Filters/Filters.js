import React, { Component } from "react";
import { connect } from "react-redux";
import FilterLink from "./FilterLink";

class Filters extends Component {
  render() {
    const { visibilityFilter } = this.props;

    return (
      <div>
        <FilterLink filter="ALL" currentFilter={visibilityFilter}>
          All
        </FilterLink>
        <FilterLink filter="ACTIVE" currentFilter={visibilityFilter}>
          Active
        </FilterLink>
        <FilterLink filter="COMPLETED" currentFilter={visibilityFilter}>
          Completed
        </FilterLink>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps, null)(Filters);
