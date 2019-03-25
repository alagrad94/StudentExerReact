import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import Search from "./Search"

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exercises">Exercises</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cohorts">Cohorts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/instructors">Instructors</Link>
                    </li>
                </ul>
                <Link to="/searchresults"><Search jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange}/></Link>
            </nav>
        )
    }
}

export default NavBar