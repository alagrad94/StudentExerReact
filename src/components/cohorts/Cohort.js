import React, { Component } from 'react';

export default class Cohort  extends Component {
  render() {
    return (
      this.props.cohort.map(co =>
        <div key={co.id}>
          {'Cohort Name:  '}{co.cohortName}<br />
        </div>
      )
    );
  }
}