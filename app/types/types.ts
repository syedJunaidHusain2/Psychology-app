export interface TaskDetail {
  taskName: string;
  numOfTimes: number;
  timesArry: string[];
}

export interface TrackerState {
  taskDetails: TaskDetail[];
  dateRangeArray: string[]; // Specify the type for date range, for example, string[] or Date[]
}
