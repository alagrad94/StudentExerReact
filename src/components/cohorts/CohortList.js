import React, { Component } from 'react';
import Cohort from './Cohort';

export default class CohortList  extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="cohorts">
      {
        this.props.cohorts.map(cohort => (
          <Cohort key={cohort.id} cohort={[cohort]}></Cohort>
        ))
      }
      </section>
      </React.Fragment>
    );
  }
}