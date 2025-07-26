import React from 'react'

const DisplayResult = ({ displayText, lable }) => {
    return (
        <div className='username w-fit'>
            <div className="displayUser text-[#0F172A] w-[300px] flex flex-col">
                <label htmlFor="display-text" className='text-[#0F172A] text-[14px] font-[500]'>{lable}</label>
                <span name="display-text" className='display-text tracking-[1px] text-[16px]'>{displayText}</span>
            </div>
        </div>
    )
}

export default DisplayResult