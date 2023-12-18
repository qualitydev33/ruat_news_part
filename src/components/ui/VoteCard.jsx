import React from 'react'
import {
    MdThumbUpAlt,
    MdThumbUpOffAlt,
    MdThumbDownAlt,
    MdThumbDownOffAlt
} from '../icon/IconImage'

const VoteCard = ({title, createdAt, heading, perc, votes, like}) => {
    return (
        <div>
            <div className={`rounded-md max-w-3xl text-xs cursor-pointer transform hover:scale-105 ease-out duration-700
                            bg-white text-black dark:bg-gray-900 dark:text-white
                            shadow-card dark:shadow-dark_card`}>
                <div className="flex w-full">
                    <div className="p-3 flex-1 border-r-2
                                    border-c_F2F2F2 dark:border-dark_0fc9f2">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-c_F2F2F2 rounded-md mr-3"></div>
                            <div className="flex-1 font-bold leading-normal">{title}</div>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="bg-c_F2F2F2 w-6 h-6 rounded-md mr-3 invisible"></div>
                            <div className="flex-1 flex flex-col">
                                <div className="font-semibold leading-normal
                                                text-c_1564C0 dark:text-dark_0fc9f2">{createdAt}</div>
                                <div className="font-bold text-sm leading-snug">{heading}</div>
                            </div>
                        </div>
                        <div className="flex items-center font-semibold leading-none mt-3">
                            <div className="flex items-center leading-normal mr-3">
                                <div>{perc}%</div>
                                <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                                <div>{votes} Votes</div>
                            </div>
                            <div className="bg-gray-100 flex-1 h-1.5 rounded-full relative">
                                <div className="absolute h-full bg-c_EBE188 dark:bg-dark_FFEB3B rounded-full" style={{width: `${perc}%`}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col
                                    w-15 sm:w-16">
                        <div className="mx-auto h-full flex flex-col">
                            <div className="mt-auto">
                                <MdThumbUpAlt className={`text-2xl ${like === true ? 'block text-c_64A879' : 'hidden'}`}/>
                                <MdThumbUpOffAlt className={`text-2xl ${like === true ? 'hidden' : 'block text-c_C8C8C8'}`}/>
                            </div>
                            <div className="mb-auto mt-9">
                                <MdThumbDownOffAlt className={`text-2xl ${like === false ? ' hidden' : 'block text-c_C8C8C8'}`}/>
                                <MdThumbDownAlt className={`text-2xl ${like === false ? 'block text-c_C85151' : 'hidden'}`}/>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default React.memo(VoteCard)