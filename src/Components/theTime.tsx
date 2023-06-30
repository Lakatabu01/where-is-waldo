import React from "react";
import { useSelector } from "react-redux";

interface Value {
  timer: { value: { seconds: number; isRunning: boolean } };
}

function TheTime() {
  const timer = useSelector((state: Value) => state.timer.value);
  return (
    <div>
      <div>Seconds: {timer.seconds}</div>
    </div>
  );
}

export default TheTime;
