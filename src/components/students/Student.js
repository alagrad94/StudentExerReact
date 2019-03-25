import React, { Component } from 'react';

export default class Student  extends Component {
  render() {
    return (
      this.props.student.map(stnt =>
        <div key={stnt.id}>
          {'Name:  '}{stnt.firstName} {stnt.lastName} <br />
          {'Slack Handle:  '}{stnt.slackHandle}
        </div>
      )
    );
  }
}