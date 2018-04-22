import React from "react";
import LinkWrapper from "./LinkWrapper";
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from "../../constants";

const Filters = () => (
  <div>
    <LinkWrapper filter={ALL_FILTER}>All</LinkWrapper>
    <LinkWrapper filter={ACTIVE_FILTER}>Active</LinkWrapper>
    <LinkWrapper filter={COMPLETED_FILTER}>Completed</LinkWrapper>
  </div>
);

export default Filters;
