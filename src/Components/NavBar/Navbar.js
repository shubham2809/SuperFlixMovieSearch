import React , {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";

class NavBar extends Component {

onSubmit = (event) => {
  event.preventDefault();

  this.props.onfetchDetails(event.target[0].value);
}

  render() {
    return (
      <div>
        <nav className="navbar .navbar-dark bg-dark">
          <a className="navbar-brand text-white">SuperFlix Movie Search</a>
          <form onSubmit={this.onSubmit} className="form-inline">
              <input className="form-control mr-sm-2" name="searchparam" type="search" placeholder="Search Movies" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
      </div>
    );
    } 
  }

const mapDispatchToProps = dispatch => {
  return {
      onfetchDetails: (searchparam) => dispatch(actions.fetchDetails(searchparam))
    }
  }



export default connect(null, mapDispatchToProps)(NavBar);;
