"use client"
  import React, { useState } from 'react';
import InputField from './input-field';
import Table from './table';
import { TrackerState } from '../types/types';

const defaultState: TrackerState = {
  task: "",
  numOfTimes: 0,
  timesArry: [],
};

const Tracker: React.FC = () => {
  const [state, setState] = useState<TrackerState>(defaultState);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <InputField setState={setState} state={state}/>
      <Table />
    </div>
  );
}

export default Tracker;
