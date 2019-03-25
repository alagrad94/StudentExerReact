import React, { Component } from 'react'

export default class SearchResults extends Component {

  render () {
    let studentElement;
    let instructorElement;
    let exerciseElement;
    let cohortElement;

    if (this.props.results.studentsResults.length > 0) {
      studentElement =
      <div className="studentsResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
      <h3>MATCHING STUDENTS</h3>
        {
        this.props.results.studentsResults.map(student =>
          <div key={student.id}>
            {'Name:  '}{student.FirstName} {student.LastName} <br />
            {'Slack Handle:  '}{student.SlackHandle}
          </div>
          )
        }
      </div>
    }

    if (this.props.results.instructorsResults.length > 0) {
      instructorElement =
      <div className="instructorsResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
      <h3>MATCHING INSTRUCTORS</h3>
        {
        this.props.results.instructorResults.map(instructor =>
          <div key={instructor.id}>
            {'Name:  '}{instructor.FirstName} {instructor.LastName} <br />
            {'Slack Handle:  '}{instructor.SlackHandle}
          </div>
          )
        }
      </div>
    }

    if (this.props.results.exercisesResults.length > 0) {
      exerciseElement =
      <div className="exercisesResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
      <h3>MATCHING EXERCISES</h3>
        {
        this.props.results.exercisesResults.map(exercise =>
          <div key={exercise.id}>
            {'Exercise Name:  '}{exercise.ExerciseName}<br />
            {'Exercise Language:  '}{exercise.ExerciseLanguage}
          </div>
          )
        }
      </div>
    }

    if (this.props.results.cohortsResults.length > 0) {
      cohortElement =
      <div className="cohortsResults" style={{border:'1px', borderColor: 'black', padding: '5px'}}>
      <h3>MATCHING COHORTS</h3>
        {
        this.props.results.cohortsResults.map(cohort =>
          <div key={cohort.id}>
            {`Cohort Name: `}{cohort.CohortName}
          </div>
          )
        }
      </div>
    }

    return (
      <section className="searchResults">
        { studentElement }
        { instructorElement }
        { exerciseElement }
        { cohortElement }
      </section>
    )
  }
}