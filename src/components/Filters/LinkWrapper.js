import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setVisibilityFilter } from "../../actions/actionCreators";
import { ALL_FILTER } from "../../constants";
import Link from "./Link";

class LinkWrapper extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  };

  static defaultProps = {
    filter: ALL_FILTER,
    children: "All",
    visibilityFilter: ALL_FILTER
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

export default connect(mapStateToProps, mapDispatchToProps)(LinkWrapper);
