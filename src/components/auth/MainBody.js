import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="main-container">
            <div class="main-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="filter-container team-filter-container">
                                <div class="search-box">
                                    <input type="text" class="search-input" value="" placeholder="Search"/>
                                </div>
                                <span class="h-space"></span>
                                <div class="filter-option">
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="include/images/sort-icon.svg" alt=""/></a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Added on - Asc</a>
                                            <a class="dropdown-item" href="#">Added on - Desc</a>
                                            <a class="dropdown-item" href="#">Name A - Z</a>
                                            <a class="dropdown-item" href="#">Name Z - A</a>
                                        </div>
                                    </div>
                                </div>
                                <span class="v-line"></span>
                                <div class="filter-list-box">
                                    <ul class="filter-list no-border-right">
                                        <li><a href="#" class="active">all</a></li>
                                        <li><a href="#">admins</a></li>
                                        <li><a href="#">non-admins</a></li>
                                    </ul>
                                </div>
                                <span class="h-space"></span>
                                <div class="filter-btn-box ml-auto"><a href="#" class="btn btn-default"><i class="fas fa-plus"></i> Add team member</a></div>
                            </div>
                        </div>
                    </div>
            <div class="row">
            <div class="col-sm-12">
                <div class="table-responsive">
                    <table class="table team-list">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="team-list-head">
                                        <div class="team-member-pic"><img src="include/images/profile-pic1.png" alt=""/></div>
                                        <div class="team-member-info">
                                            <div class="team-member-name">Medina Trudoo</div>
                                            <div class="team-member-email">jmedina@trudoo.name</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="team-member-role">ADMIN</div>
                                </td>
                                <td>
                                    <div class="team-stat-box">
                                        <ul class="team-list-stats">
                                          <li><h6>3k</h6><span>EMAILS</span></li>
                                          <li><h6>160</h6><span>MEETINGS</span></li>
                                          <li><h6>12%</h6><span>REPLY RATE</span></li>
                                          <li><h6>4</h6><span>SEQUENCES</span></li>
                                        </ul>
                                    </div>
                                </td>
                                 <td>
                                    <div class="team-total-box">
                                        <ul class="logo-group-list">
                                            <li><div class="logo-group-box"><img src="include/images/mastercard-logo.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/apple-icon.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/mountain-dew-logo.svg" alt=""/></div></li>
                                        </ul>
                                        <div class="team-total-number">+5 clients</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Snooze</a>
                                            <a class="dropdown-item" href="#">Skip</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
        
        
        
                             <tr>
                                <td>
                                    <div class="team-list-head">
                                        <div class="team-member-pic"><img src="include/images/profile-pic2.png" alt=""/></div>
                                        <div class="team-member-info">
                                            <div class="team-member-name">Medina Trudoo</div>
                                            <div class="team-member-email">jmedina@trudoo.name</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="team-member-role">ADMIN</div>
                                </td>
                                <td>
                                    <div class="team-stat-box">
                                        <ul class="team-list-stats">
                                          <li><h6>3k</h6><span>EMAILS</span></li>
                                          <li><h6>160</h6><span>MEETINGS</span></li>
                                          <li><h6>12%</h6><span>REPLY RATE</span></li>
                                          <li><h6>4</h6><span>SEQUENCES</span></li>
                                        </ul>
                                    </div>
                                </td>
                                 <td>
                                    <div class="team-total-box">
                                        <ul class="logo-group-list">
                                            <li><div class="logo-group-box"><img src="include/images/mastercard-logo.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/apple-icon.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/mountain-dew-logo.svg" alt=""/></div></li>
                                        </ul>
                                        <div class="team-total-number">+5 clients</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Snooze</a>
                                            <a class="dropdown-item" href="#">Skip</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
        
        
        
                             <tr>
                                <td>
                                    <div class="team-list-head">
                                        <div class="team-member-pic"><img src="include/images/profile-pic3.png" alt=""/></div>
                                        <div class="team-member-info">
                                            <div class="team-member-name">Rami Moore</div>
                                            <div class="team-member-email">rmoore@livez.gov</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="team-member-role"></div>
                                </td>
                                <td>
                                    <div class="team-stat-box">
                                        <ul class="team-list-stats">
                                          <li><h6>3k</h6><span>EMAILS</span></li>
                                          <li><h6>160</h6><span>MEETINGS</span></li>
                                          <li><h6>12%</h6><span>REPLY RATE</span></li>
                                          <li><h6>4</h6><span>SEQUENCES</span></li>
                                        </ul>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="team-total-box">
                                        <ul class="logo-group-list">
                                            <li><div class="logo-group-box"><img src="include/images/mastercard-logo.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/apple-icon.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/mountain-dew-logo.svg" alt=""/></div></li>
                                        </ul>
                                        <div class="team-total-number">+5 clients</div>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="dropdown">
                                         <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                         <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Snooze</a>
                                            <a class="dropdown-item" href="#">Skip</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
        
        
                              <tr>
                                <td>
                                    <div class="team-list-head">
                                        <div class="team-member-pic"><img src="include/images/profile-pic4.png" alt=""/></div>
                                        <div class="team-member-info">
                                            <div class="team-member-name">Irina Ryan</div>
                                            <div class="team-member-email">iryan@shuffletag.biz</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="team-member-role"></div>
                                </td>
                                <td>
                                    <div class="team-stat-box">
                                        <ul class="team-list-stats">
                                          <li><h6>3k</h6><span>EMAILS</span></li>
                                          <li><h6>160</h6><span>MEETINGS</span></li>
                                          <li><h6>12%</h6><span>REPLY RATE</span></li>
                                          <li><h6>4</h6><span>SEQUENCES</span></li>
                                        </ul>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="team-total-box">
                                        <ul class="logo-group-list">
                                            <li><div class="logo-group-box"><img src="include/images/mastercard-logo.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/apple-icon.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/mountain-dew-logo.svg" alt=""/></div></li>
                                        </ul>
                                        <div class="team-total-number">+5 clients</div>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="dropdown">
                                         <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                         <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Snooze</a>
                                            <a class="dropdown-item" href="#">Skip</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
        
        
                              <tr>
                                <td>
                                    <div class="team-list-head">
                                        <div class="team-member-pic"><img src="include/images/profile-pic5.png" alt=""/></div>
                                        <div class="team-member-info">
                                            <div class="team-member-name">Michael Collins</div>
                                            <div class="team-member-email">mcollins@snaptags.info</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="team-member-role"></div>
                                </td>
                                <td>
                                    <div class="team-stat-box">
                                        <ul class="team-list-stats">
                                          <li><h6>3k</h6><span>EMAILS</span></li>
                                          <li><h6>160</h6><span>MEETINGS</span></li>
                                          <li><h6>12%</h6><span>REPLY RATE</span></li>
                                          <li><h6>4</h6><span>SEQUENCES</span></li>
                                        </ul>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="team-total-box">
                                        <ul class="logo-group-list">
                                            <li><div class="logo-group-box"><img src="include/images/mastercard-logo.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/apple-icon.svg" alt=""/></div></li>
                                            <li><div class="logo-group-box"><img src="include/images/mountain-dew-logo.svg" alt=""/></div></li>
                                        </ul>
                                        <div class="team-total-number">+5 clients</div>
                                    </div>
                                </td>
        
                                <td>
                                    <div class="dropdown">
                                         <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>
                                         <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Snooze</a>
                                            <a class="dropdown-item" href="#">Skip</a>
                                            <a class="dropdown-item" href="#">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                <div class="row">
                        <div class="col-sm-12">
                            <div class="table-responsive">
                                <table class="table team-list">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="team-list-head">
                                                    <div class="team-member-pic">JD</div>
                                                    <div class="team-member-info">
                                                        <div class="team-member-name">John Doe</div>
                                                        <div class="team-member-email">john.doe@hmail.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center justify-content-end">
                                                 <span class="v-line"></span>
                                                <div class="team-member-options">
                                                    <div class="admin-toggle-box">
                                                        <em>IS ADMIN</em>
                                                        <div class="radio-group">
                                                            <label><input type="radio" name="toggle2" value="yes" checked=""/><span>Yes</span></label>
                                                            <label><input type="radio" name="toggle2" value="no"/><span>No</span></label>
                                                        </div>
                                                    </div> 
                                                </div>
                                                 <span class="v-line"></span>
                                             <a href="#" class="btn btn-default">Save</a>
                                         </div>
                                     </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
MainBody.propTypes = {};
export default connect(
)(withRouter(MainBody));