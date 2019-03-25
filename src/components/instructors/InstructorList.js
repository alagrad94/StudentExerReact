import React, { Component } from 'react';
import Instructor from './Instructor';

export default class InstructorList  extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="instructors">
      {
        this.props.instructors.map(instructor => (
          <Instructor key={instructor.id} instructor={[instructor]}></Instructor>
        ))
      }
      </section>
      </React.Fragment>
    );
  }
}