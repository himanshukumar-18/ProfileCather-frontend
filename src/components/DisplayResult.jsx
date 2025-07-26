import React from 'react'

const DisplayResult = ({ displayText }) => {
    return (
        <div className='username w-fit'>
            <div className="displayUser mt-[8px] text-[#E5E7EB] outline-3 outline-[#22D3EE] w-[300px] p-[15px]">
                <span className='display-text tracking-[1px] font-bold'>{displayText}</span>
            </div>
        </div>
    )
}

export default DisplayResult