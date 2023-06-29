import React from 'react'
import { logo, exchange, dashboard, transactions, wallet, news, statistics, Avatar, iphone, macbook } from '../assets'

function Sidenav() {
    const menus = [
        {
            name: 'Dashboard',
            icon: dashboard
        }, {
            name: 'Wallet',
            icon: wallet
        }, {
            name: 'Statistics',
            icon: statistics
        }, {
            name: 'Transactions',
            icon: transactions
        }, {
            name: 'Exchange',
            icon: exchange
        }, {
            name: 'News',
            icon: news
        },
    ];

    const devices = [
        {
            name: "Iphone 6s Plus",
            icon: iphone,
            isActive: true
        },
        {
            name: "Macbook 2017",
            icon: macbook,
            isActive: true
        }
    ]
    return (
        <div className='bg-white h-full w-64 space-y-10'>
            <div className='px-9'>

                <div className='flex space-x-3 items-center py-5'>
                    <img src={logo} alt="" className='w-12 h-12' />
                    <div>Mine&Shine</div>
                </div>

                <div className='space-y-6 mt-5'>
                    {menus.map((value, key) => {
                        return (
                            <div className="flex items-center space-x-4 " key={key}>
                                <img src={value.icon} className="w-5" />
                                <div>{value.name}</div>
                            </div>
                        )
                    })}
                </div>

                <div className="space-y-6 mt-10">
                    <div className='text-lg'>Active device</div>
                    <div className='space-y-6'>
                        {devices.map((device, key) => {
                            return (
                                <div className="flex space-x-6" key={key} >
                                    <div className='h-16 w-16 bg-blue-50 flex items-center justify-center'>
                                        <img src={device.icon} className='w-full h-full object-cover' />
                                    </div>
                                    <div>
                                        <div className='text-sm'>{device.name}</div>
                                        <div className='flex items-center space-x-2'>
                                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            <div className='text-sm'>{device.isActive ? "active" : "non Active"}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex space-x-6 bg-blue-50 mt-6 p-3">
                    <img src={Avatar} className='w-12 h-12' />
                    <div>
                        <div className='text-sm'>Mike Taylor</div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <div className='text-sm'>Online</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav