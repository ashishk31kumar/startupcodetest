import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import TopHeader from "./TopHeader";
import SideHeader from "./SideHeader";
import MainBody from "./MainBody";

class StartPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <body>
      <SideHeader/>
      <TopHeader/>
      <MainBody/>
      </body>
    );
  }
}

StartPage.propTypes = {};
export default connect(
)(withRouter(StartPage));