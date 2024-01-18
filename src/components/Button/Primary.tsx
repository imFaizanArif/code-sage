import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Primary = ({ title }: { title: string }) => {
    return (
        <button className='w-[40%] mt-16 mx-auto flex justify-center items-center border-[1px] border-primary group-hover:border-background group-hover:text-background group-hover:bg-primary text-primary text-xl px-8 py-2 rounded-full'>
            {title}
            <FaArrowRightLong className="text-primary group-hover:text-background ml-4" size={22} />
        </button>
    )
}

export default Primary