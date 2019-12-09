import React, { Component } from "react";
import PropTypes from "prop-types";

export default class User extends Component {
  onClickEvet() {
    console.log(this);
  }
  myfunction() {
    console.log("selam");
  }
  cardHeader = e => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    this.onClickEvet = this.onClickEvet.bind(this);
  }
  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div
            className="card-header d-flex justify-content-between"
            onClick={this.cardHeader}
          >
            <h4 className="d-inline" onClick={this.onClickEvet}>
              {name}
            </h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maaş : {salary}</p>
              <p className="card-text">Department : {department}</p>
              <p>{this.state.test}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

User.defaultProps = {
  name: "isimsiz",
  salary: "parasız",
  department: "departmansız"
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
};
