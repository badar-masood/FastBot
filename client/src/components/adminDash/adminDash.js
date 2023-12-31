import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

class adminDashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
    

  render() {
    return (
      <div style={{backgroundSize:"100%", backgroundColor:"white"}}>
        <Navbar/>
      <div style={{ height: "93.3vh" }} className="container valign-wrapper">
        <div className="row" style={{marginBottom:"250px"}}>
          <div className="landing-copy col s12">
            <h4>
              <p >
                <span style={{ fontFamily: "monospace", color:"darkblue", fontSize:"60px" }}><b>ADMIN DASHBOARD</b></span>
              </p>
            </h4>
            <div className="col s12" style={{ paddingLeft: "1.250px" }}>
            <button style={{
                    width: "150px",
                    borderRadius: "15px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginLeft:"0px"
                  }}
                  type="submit"
                  className="btn btn-large black"
                >
                <Link to="/support"><b>Live Chat</b></Link>
            </button>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <a href="https://formspree.io/forms/moqzqknr/submissions" target={"_blank"} rel="noreferrer">
            <button style={{
                    width: "200px",
                    borderRadius: "15px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginLeft:"0px"
                  }}
                  type="submit"
                  className="btn btn-large black blue-text"
                >
                <b>View Feedback</b>
            </button></a>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button style={{
                    width: "300px",
                    borderRadius: "15px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginLeft:"0px"
                  }}
                  type="submit"
                  className="btn btn-large black blue-text"
                >
                <Link to="/report" target="_blank"><b>View Efficiency Report</b></Link>
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

adminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(adminDashboard);
