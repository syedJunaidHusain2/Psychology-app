import { useFormik } from 'formik'

const InputField = ({ setState, state }) => {

    const formik = useFormik({
        initialValues : {
            
        }
    })

    return (
        <div className=''>
            <form
                onSubmit={formik.handleSubmit}
                className='p-5 rounded-2xl shadow-2xl flex flex-col gap-5'>
                <div>
                    <div className=" h-12 relative flex rounded-xl">
                        <input
                            required
                            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-bg_color_secendory focus:shadow-md"
                            id="task"
                            type="text"
                        />
                        <label
                            className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-bg_color_secendory peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                        >
                            Enter Your Task
                        </label>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className="w-60 h-12 relative flex rounded-xl">
                        <input
                            required
                            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-bg_color_secendory focus:shadow-md"
                            id="times"
                            type="text"
                        />
                        <label
                            className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-bg_color_secendory peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                        >
                            How Many Times?
                        </label>
                    </div>
                    <div className="w-60 h-12 relative flex rounded-xl">
                        <input
                            required
                            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-bg_color_secendory focus:shadow-md"
                            id="time"
                            type="time"
                        />
                        <label
                            className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-bg_color_secendory peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                        >
                            Set Time
                        </label>
                    </div>
                    <button
                        type='submit'
                        className="relative py-2 px-8 text-black text-base font-medium nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-bg_color_secendory before:to-[#84c8a6] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                    >
                        Add
                    </button>
                </div>


            </form>
        </div>

    )
}
export default InputField