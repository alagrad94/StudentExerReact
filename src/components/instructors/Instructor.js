import React, { Component } from 'react';

export default class Instructor  extends Component {
  render() {
    return (
      this.props.instructor.map(inst =>
        <div key={inst.id}>
          {'Name:  '}{inst.firstName} {inst.lastName} <br />
          {'Slack Handle:  '}{inst.slackHandle}
        </div>
      )
    );
  }
}