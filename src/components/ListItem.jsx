import React from 'react'

export default function ListItem({ icon, title, subTitle, value, time }) {
    return (
        <div className='flex flex-row bg-white rounded-sm px-5 py-5'>
            <div className='w-14 h-14'>{icon}</div>
            <div className='flex-1 ml-4'>
                <div>{title}</div>
                <div>{subTitle}</div>
            </div>
            <div className='flex items-end flex-col'>
                <div>{value}</div>
                <div>{time}</div>
            </div>
        </div>
    )
}
