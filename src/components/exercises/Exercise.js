import React, { Component } from 'react';

export default class Exercise  extends Component {
  render() {
    return (
      this.props.exercise.map(ex =>
        <div key={ex.id}>
          {'Exercise Name:  '}{ex.exerciseName}<br />
          {'Exercise Language:  '}{ex.exerciseLanguage}
        </div>
      )
    );
  }
}