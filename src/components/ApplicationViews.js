import { Route } from 'react-router-dom';
import React, { Component } from "react";
import APIManager from '../modules/apiManager';
import SearchResults from './nav/SearchResults';
import StudentList from './students/StudentList';
import ExerciseList from './exercises/ExerciseList';
import InstructorList from './instructors/InstructorList';
import CohortList from './cohorts/CohortList';

export default class ApplicationViews extends Component {
  constructor() {
    super();
    this.state = {

      students: [],
      instructors: [],
      cohorts: [],
      exercises: []
    }
  }

  populateAppState () {
    APIManager.connectToData({dataSet: 'students', fetchType: 'GET', embedItem: ""})
      .then(students => {this.setState({students: students}, ()=>null)})
      .then(() => APIManager.connectToData({dataSet: 'instructors', fetchType: 'GET', embedItem: "?_expand=employee"}))
      .then(instructors => {this.setState({instructors: instructors}, ()=>null)})
      .then(() => APIManager.connectToData({dataSet: 'cohorts', fetchType: 'GET', embedItem: ""}))
      .then(cohorts => {this.setState({cohorts: cohorts}, ()=>null)})
      .then(() => APIManager.connectToData({dataSet: 'exercises', fetchType: 'GET', embedItem: ""}))
      .then(exercises => {this.setState({exercises: exercises}, ()=>null)})
  }

  componentDidMount () {
    this.populateAppState();
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <StudentList {...props} students={this.state.students} />}} />
        <Route exact path="/exercises" render={(props) => {
          return <ExerciseList exercises={this.state.exercises}  />}} />
        <Route exact path="/instructors" render={(props) => {
          return <InstructorList {...props} instructors={this.state.instructors}/>}} />
        <Route exact path="/cohorts" render={(props) => {
          return <CohortList {...props} cohorts={this.state.cohorts}/>}} />
        <Route exact path="/searchresults" render={(props) => {
          return <SearchResults jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange}/>}} />
      </React.Fragment>
    )
  }
}