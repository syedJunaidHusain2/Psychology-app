import DateRangePicker from './dateRange';

const InputField = ({
    setTasks, tasksState, addNewTask, handleTaskSubmission, mappedArray, setMappedArray, taskNumber, taskInput, setTaskInput
}:any) => {

    const handleChange = (e:any) => {
        e.preventDefault();
        setTaskInput(e.target.value);
    };

    const handleChangeNumTimes = (e:any) => {
        e.preventDefault();
        const value = parseInt(e.target.value, 10);

        // Make a copy of taskDetails and update the numOfTimes and timesArry
        const updatedTaskDetails = [...tasksState.taskDetails];
        updatedTaskDetails[taskNumber] = {
            ...updatedTaskDetails[taskNumber],
            numOfTimes: value >= 5 ? 5 : value <= 0 ? 0 : value,
            timesArry: Array(value >= 5 ? 5 : value <= 0 ? 0 : value).fill("")
        };
        setTasks({
            ...tasksState,
            taskDetails: updatedTaskDetails
        });
        if (value <= 5) {
            const newArray = Array.from({ length: value }, (_, index) => index + 1);
            setMappedArray(newArray);
        }
    };

    const handleTimeChange = (index:any, timeValue:any) => {
        const updatedTimesArray = [...tasksState.taskDetails[taskNumber].timesArry];
        updatedTimesArray[index] = timeValue;

        // Update taskDetails with the new timesArry
        const updatedTaskDetails = [...tasksState.taskDetails];
        updatedTaskDetails[taskNumber] = {
            ...updatedTaskDetails[taskNumber],
            timesArry: updatedTimesArray
        };

        setTasks({
            ...tasksState,
            taskDetails: updatedTaskDetails
        });
    };

    return (
        <div className='p-6 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <form className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <div className="w-72 flex">
                        <input
                            required
                            id="taskName"
                            type="text"
                            placeholder="Enter Your Task"
                            value={taskInput}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3fb6af] focus:ring-2 focus:ring-[#58bcb3] transition duration-300 shadow-sm"
                        />
                    </div>
                    <div className="w-48 h-12 flex">
                        <input
                            required
                            id="times"
                            type="number"
                            placeholder='How Many Times?'
                            onChange={handleChangeNumTimes}
                            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3fb6af] focus:ring-2 focus:ring-[#58bcb3] transition duration-300 shadow-sm'
                        />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex gap-4 w-80 flex-wrap'>
                        {mappedArray.map((_:any, id:any) => (
                            <div key={id} className='flex gap-2 items-center'>
                                <div className='text-sm text-gray-700'>{id + 1}</div>
                                <div className="w-32 h-12 flex rounded-xl">
                                    <input
                                        required
                                        id={`time${id}`}
                                        type="time"
                                        onChange={(e) => handleTimeChange(id, e.target.value)}
                                        className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3fb6af] focus:ring-2 focus:ring-[#58bcb3] transition duration-300 shadow-sm'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <DateRangePicker />
                    <button
                        type='button'
                        onClick={addNewTask}
                        className="mx-auto h-fit my-auto py-2 px-8 text-white text-base font-medium rounded-full bg-[#58bcb3] transition-all duration-300 ease-in-out shadow-sm hover:bg-[#48a89e] active:bg-[#41a28e]"
                    >
                        Add Next Task
                    </button>
                    <button
                        type='button'
                        onClick={handleTaskSubmission}
                        className="mt-4 py-2 px-6 bg-[#58bcb3] text-white font-semibold rounded-full shadow-sm hover:bg-[#48a89e] transition duration-300"
                    >
                        Submit All Tasks
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputField;
