import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";


class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="top-bar">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-12">
                      <nav aria-label="breadcrumb" class="breadcrumb-container">
                          <ol class="breadcrumb">
                              <li class="breadcrumb-item"><a href="#"><img src="include/images/breadcrumb-hero-logo.svg" alt=""/> <span>Vector Agency</span></a></li>
                              <li class="breadcrumb-item active" aria-current="page">Clients</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
          
        );
    }
}
TopHeader.propTypes = {};
export default connect(
)(withRouter(TopHeader));