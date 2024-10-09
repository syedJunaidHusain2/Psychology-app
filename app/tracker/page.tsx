"use client";
import React, { useState } from 'react';
import InputField from './input-field';
import Table from './table';
import { TrackerState } from '../types/types';

interface TaskDetail {
  taskName: string;
  numOfTimes: number;
  timesArry: string[];
}

interface TrackerState {
  taskDetails: TaskDetail[];
  dateRangeArray: any[];
}

const defaultState: TrackerState = {
  taskDetails: [],
  dateRangeArray: []
};

const Tracker: React.FC = () => {
  const [tasksState, setTasks] = useState<TrackerState>(defaultState);
  const [taskInput, setTaskInput] = useState("");
  const [taskNumber, setTaskNumber] = useState(0);
  const [mappedArray, setMappedArray] = useState<any[]>([]);

  const addNewTask = () => {
    if (taskInput.trim() === "") {
      return; 
    }

    setTasks((prevState) => ({
      ...prevState,
      taskDetails: [
        ...prevState.taskDetails,
        {
          taskName: taskInput,
          numOfTimes: 0,
          timesArry: []
        }
      ]
    }));
    setTaskInput("");
    setTaskNumber(prevState => prevState + 1);
  };

  const handleTaskSubmission = () => {
    const finalTasks = tasksState.taskDetails.filter(task => task.taskName.trim() !== "");
    console.log("Final Tasks:", finalTasks);
  };

  return (
    <div className="pt-32 flex justify-center items-center flex-col gap-5">
      <InputField
        setTasks={setTasks}
        tasksState={tasksState}
        addNewTask={addNewTask}
        handleTaskSubmission={handleTaskSubmission} 
        mappedArray={mappedArray}
        setMappedArray={setMappedArray}
        taskNumber={taskNumber}
        taskInput={taskInput} 
        setTaskInput={setTaskInput}
      />
      {tasksState.taskDetails.length > 0 && <Table tasksState={tasksState} />}
    </div>
  );
};

export default Tracker;
