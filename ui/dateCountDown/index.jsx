import React, { Component } from "react";
import Countdown from "react-countdown";

function DateCountDown({ date, renderer }) {
  class CountDownComponent extends Component {
    render() {
      return <Countdown date={date} renderer={renderer} />;
    }
  }

  return <CountDownComponent />;
}

export default DateCountDown;
