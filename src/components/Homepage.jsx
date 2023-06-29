import React from 'react';
import { ic9, ic8, ic7, ic6, ic5, ic4, ic3, ic2, ic1, bg_element, bitcoin, bitcoin_ic, ethereum, vodafone, facebook, panda, citi, uber, upArrow, downArrow } from '../assets/index.jsx';
import { search } from '../assets/index.jsx';
import ListItem from './ListItem.jsx';

export const Homepage = () => {
    const icons = [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9];
    const socialMedia = [
        {
            name: "facebook",
            icon: facebook
        }
    ];
    return (
        <div className='px-16 pt-8'>
            <div className='flex space-x-4'>
                <div className='space-y-5 mr-10'>
                    <div className='text-2xl'>WELCOME TO DASHBOARD</div>
                    <div className='flex space-x-4 '>
                        {icons.map((val, key) => {
                            return (
                                <div
                                    key={key}
                                    className={`w-12 h-12 ${key === 0 ? "border-blue-700" : 'border-white'} border-4  rounded-xl p-1`}>
                                    <div className='flex h-full w-full items-center justify-center rounded-xl bg-white'>
                                        <img src={val} className='w-6 object-contain' />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex-1'>
                            <div className='mb-6'>Overview</div>
                            <div className='grid gap-8 grid-cols-12'>
                                <div className='relative col-span-9'>
                                    <div className='p-9 text-white grid grid-cols-2' style={{ background: "#4F46BA" }}>
                                        <div className='space-y-9'>

                                            <div>
                                                <div className='text-lg'>available balance in usd</div>
                                                <div className='mt-2 text-5xl'>134,510.15</div>
                                            </div>
                                            <div className='flex flex-row space-x-8'>
                                                <div>
                                                    <div className='text-lg'>Transactions</div>
                                                    <div className='text-5xl mt-2'>34,405</div>
                                                </div>
                                                <div>
                                                    <div className='text-lg'>wallet</div>
                                                    <div className='text-5xl mt-2'>23</div>
                                                </div>
                                            </div>
                                            <div className='text-lg'>Last activity at 21 May, 2021</div>
                                        </div>
                                        <div className='flex items-center justify-end pr-14 '>
                                            <div>
                                                <img src={bitcoin} className='w-24' />
                                            </div>
                                            <img src={bg_element} className='absolute -right-0 w-64 -top-6 bottom-0' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 mt-9'>
                                        <div className='bg-white p-8 text-center space-y-2'>
                                            <div>NioWallet</div>
                                            <div className='flex justify-center text-lg gap-2 font-semibold'>
                                                <div>4.434953</div>
                                                <div className='text-gray-700 '>NIO</div>
                                            </div>
                                            <div className='flex justify-center'>
                                                <img src={bitcoin_ic} className='w-7' />
                                            </div>
                                        </div>
                                        <div className='bg-white p-8 text-center space-y-2'>
                                            <div>Ethereum Wallet</div>
                                            <div className='flex justify-center text-lg gap-2 font-semibold'>
                                                <div>0.000298</div>
                                                <div className='text-gray-700 '>ETH</div>
                                            </div>
                                            <div className='flex justify-center'>
                                                <img src={ethereum} className='w-5' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3 space-y-5'>
                                    <div className='p-8' style={{ background: "#DAE3F7" }}>
                                        <div style={{ color: "#6B6570" }}>XRP/USD</div>
                                        <div className=' text-black'>
                                            <div className=' text-black flex space-x-5 space-y-1'  >
                                                <div className='text-2xl'>$0.61688</div>
                                                <div>
                                                    <img src={upArrow} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-8' style={{ background: "#DAE3F7" }}>
                                        <div style={{ color: "#6B6570" }}>XRP/USD</div>
                                        <div className=' text-black'>
                                            <div className=' text-black flex space-x-5 space-y-1'  >
                                                <div className='text-2xl'>$0.61688</div>
                                                <div>
                                                    <img src={upArrow} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-8' style={{ background: "#DAE3F7" }}>
                                        <div style={{ color: "#6B6570" }}>XRP/USD</div>
                                        <div className=' text-black'>
                                            <div className=' text-black flex space-x-5 space-y-1'  >
                                                <div className='text-2xl'>$0.61688</div>
                                                <div>
                                                    <img src={upArrow} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-8' style={{ background: "#DAE3F7" }}>
                                        <div style={{ color: "#6B6570" }}>XRP/USD</div>
                                        <div className=' text-black'>
                                            <div className=' text-black flex space-x-5 space-y-1'  >
                                                <div className='text-2xl'>$0.61688</div>
                                                <div>
                                                    <img src={upArrow} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='items-end'>
                    <div className='text-xl mb-6'>SEARCH</div>
                    <div className='flex flex-space-x-3'>
                        <input type="search" className='placeholder:text-gray-300 px-4 py-3 bg-white' placeholder='Enter Search Term' />
                        <button type='submit' className='bg-blue-800 px-5 py-4'>
                            <img src={search} />
                        </button>
                    </div>
                    <div className='mt-16'>
                        <div className='space-y-4'>
                            <div>
                                <ListItem
                                    title="Foodpanda"
                                    subTitle="meal"
                                    value="- $15.85"
                                    time="10:00 PM"
                                    icon={<img src={panda} alt='icon-ls1' />} />
                            </div>
                            <div>
                                <ListItem
                                    title="Facebook"
                                    subTitle="meal"
                                    value="+ $7000"
                                    time="10:00 PM"
                                    icon={<img src={facebook} alt='icon-ls1' />} />
                            </div>
                            <div>
                                <ListItem
                                    title="Citi bank"
                                    subTitle="meal"
                                    value="- $2,318.75"
                                    time="10:00 PM"
                                    icon={<img src={citi} alt='icon-ls1' />} />
                            </div>
                            <div>
                                <ListItem
                                    title="Uber"
                                    subTitle="meal"
                                    value="- $8.75"
                                    time="10:00 PM"
                                    icon={<img src={uber} alt='icon-ls1' />} />
                            </div>
                            <div>
                                <ListItem
                                    title="Vodafone"
                                    subTitle="meal"
                                    value="- $58"
                                    time="10:00 PM"
                                    icon={<img src={vodafone} alt='icon-ls1' />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
