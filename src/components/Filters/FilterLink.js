import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setVisibilityFilter } from "../../actions/actionCreators";
import Link from "./Link";

class FilterLink extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  };

  static defaultProps = {
    filter: "ALL",
    children: "All",
    visibilityFilter: "ALL"
  };

  handleFilterClick = e => {
    const { setVisibilityFilter, filter } = this.props;
    e.preventDefault();
    setVisibilityFilter(filter);
  };

  render() {
    const { filter, visibilityFilter, children } = this.props;
    return visibilityFilter === filter ? (
      <span>{children}</span>
    ) : (
      <Link onClick={e => this.handleFilterClick(e)}>{children}</Link>
    );
  }
}

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
