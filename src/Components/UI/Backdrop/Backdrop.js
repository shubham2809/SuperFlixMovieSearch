import React, { Component } from "react";
import "./Backdrop.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Backdrop extends Component {
  modalHandler = () => {
    this.props.onCloseModal();
  };

  render() {
    return this.props.show ? (
      <div className="backdrop" onClick={this.modalHandler} />
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    show: state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(actions.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
