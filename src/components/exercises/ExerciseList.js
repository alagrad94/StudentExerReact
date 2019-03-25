import React, { Component } from 'react';
import Exercise from './Exercise';

export default class ExerciseList  extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="exercises">
      {
        this.props.exercises.map(exercise => (
          <Exercise key={exercise.id} exercise={[exercise]}></Exercise>
        ))
      }
      </section>
      </React.Fragment>
    );
  }
}