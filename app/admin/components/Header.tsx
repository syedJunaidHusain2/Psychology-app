import Image from 'next/image';
import { IoNotificationsOutline } from 'react-icons/io5';
import { LuPenLine } from 'react-icons/lu';

const Header = () => {
    return (
        <div className='py-5 border-b-2 border-stone-100'>
            <div className='max-w-screen-2xl w-screen mx-auto'>
                <div className='flex justify-between items-center '>
                    <div>
                        Logo
                    </div>
                    <div className='flex items-center gap-4 text-[#00000097]'>
                        <div className='flex justify-center items-center mr-3'>
                            <p className='text-[15px] text-[#00000092]'>
                                <LuPenLine />
                            </p>
                            <div className='text-[14px] ml-2'>
                                Write
                            </div>

                        </div>
                        <div className='text-[21px] text-black h-9 w-9 bg-gray-200 rounded-full flex justify-center items-center'>
                            <IoNotificationsOutline />
                        </div>
                        <div>
                            <div >
                                <Image src="/img1.jpg" className='rounded-full h-10 w-10' width={50} height={50} alt='profile=pic' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header