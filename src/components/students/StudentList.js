import React, { Component } from 'react';
import Student from './Student';

export default class StudentList  extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="students">
      {
        this.props.students.map(student => (
          <Student key={student.id} student={[student]}></Student>
        ))
      }
      </section>
      </React.Fragment>
    );
  }
}