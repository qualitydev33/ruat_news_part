import { useNavigate } from 'react-router-dom'
import { NEWS_SAMPLE, SERVER_URL } from '../constant'
import {
    WarnImg,
    BsFillShareFill,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    BullImg,
    BearImg,
    CoinSearchSvg

} from '../icon/IconImage'
import apiClient from '../../utils/api'
import { useState } from 'react/cjs/react.development'

const NewsCard = ({newsItem, pollOptionObj}) => {
    const navigate = useNavigate()
    
    const [vote, setVote] = useState({
        vote_up: newsItem.vote_up, 
        vote_down: newsItem.vote_down, 
        vote_comment: newsItem.vote_comment,
        vote_bull: newsItem.vote_bull,
        vote_bear: newsItem.vote_bear
    })

    

    const gotoDetailPageHandler = () => {
        var idx = NEWS_SAMPLE.findIndex(item => item.id === newsItem.id)
        console.log('idx')
        navigate(`${idx}`, {
            state: {
                type: newsItem.type
            }
        })
    }

    return (
        <>
            <div className={`flex-col rounded-md text-black dark:text-white
                            shadow-card dark:shadow-dark_card bg-white dark:bg-transparent`}>
                <div className="pt-2.5 lg:pt-4
                                px-4 lg:px-7">
                    <div className="flex items-center text-sm">
                        <span className="font-semibold text-c_1564C0 dark:text-dark_0fc9f2
                                         text-10px lg:text-sm">{String(newsItem.type).toUpperCase()}</span>
                        <div className="bg-c_E8EBF1 h-4_5 w-px mx-2.5"></div>
                        <div className="font-semibold text-c_6E7582
                                        text-10px lg:text-sm">2 Min ago</div>
                        <div className="flex items-center ml-auto font-medium cursor-pointer">
                            <img src={WarnImg} alt='warn img'></img>
                            <span className='ml-2 text-10px lg:text-sm'>Report</span>
                        </div>
                        <div className="flex items-center ml-6 font-medium cursor-pointer">
                            <BsFillShareFill className='text-c_1564C0 dark:text-dark_0fc9f2' />
                            <span className='ml-2 text-10px lg:text-sm'>Share</span>
                        </div>
                    </div>
                    <div className='mt-2.5 font-semibold cursor-pointer
                                    text-xs lg:text-xl'
                        onClick={() => gotoDetailPageHandler()}>{newsItem.title}</div>
                    <div className='w-full flex flex-col mt-3.5'>
                        <div className={`flex flex-col ${newsItem.url ? 'h-543px' : ''}`}>
                            <img className='rounded-lg m-auto shadow-card dark:shadow-dark_card' src={newsItem.url} alt="" />
                        </div>
                        
                        {newsItem.type === 'polls' && Object.keys(pollOptionObj).length !== 0 && newsItem.polloption_li && 
                        <div className='mt-3 mb-9'>
                            {(String(newsItem.polloption_li).split(",")).map((item, index) => {
                                return <div key={`item_${index}`}>
                                    <div className='flex flex-col mt-5'>
                                        <label htmlFor="" className='text-sm font-semibold text-10px lg:text-sm'>{pollOptionObj[item].title}</label>
                                        <div className='flex items-center w-full'>
                                            <div className='relative h-1.5 flex-1 bg-c_F2F2F2 rounded-md'>
                                                <div className='absolute top-0 left-0 h-1.5 rounded-md bg-c_7EAFE8 dark:bg-dark_0fc9f2' style={{width: '88%'}}></div>
                                            </div>
                                            <div className='flex items-center ml-4_5 text-10px lg:text-xs'>
                                                <span className='font-medium'>98%</span>
                                                <div className='bg-c_BCC3CF w-px h-2.5 mx-1'></div>
                                                <span className='font-medium'>391 Votes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        }

                        {newsItem.type === 'polls' && <div className='flex flex-col my-6'>
                                <button className='mx-auto flex items-center px-5 rounded-full text-white font-medium
                                                    bg-c_1564C0 dark:bg-dark_0fc9f2
                                                    h-6 lg:h-7_5
                                                    text-11px lg:text-sm
                                                    transform hover:scale-105 ease-out duration-700'>Submit Your Option</button>
                        </div>}
                        
                    </div>
                </div>
                <div className='w-full h-px bg-c_E8EBF1 dark:bg-dark_0fc9f2'></div>
                <div className='px-7 flex items-center gap-x-4
                                py-2 lg:py-4'>
                    <div className='flex items-center cursor-pointer'>
                        <IoTrendingUpSharp className=' text-c_64A879 stroke-1' />
                        <span className='ml-2 text-c_6E7582 font-medium text-10px lg:text-sm'>{vote.vote_up === null ? Number(vote.vote_up) : String(vote.vote_up).split(",").length}</span>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <IoTrendingDownSharp className='text-c_C85151 stroke-1' />
                        <span className='ml-2 text-c_6E7582 font-medium text-10px lg:text-sm'>{vote.vote_down === null ? Number(vote.vote_down) : String(vote.vote_down).split(",").length}</span>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <MdQuestionAnswer className='text-c_7EAFE8' />
                        <span className='ml-2 text-c_6E7582 font-medium text-10px lg:text-sm'>{vote.vote_comment === null ? Number(vote.vote_comment) : String(vote.vote_comment).split(",").length}</span>
                    </div>
                    <div className='items-center cursor-pointer hidden lg:flex'>
                        <img className='text-c_7EAFE8' src={BullImg} alt='' />
                        <span className='ml-2 text-c_6E7582 font-medium text-10px lg:text-sm'>{vote.vote_bull === null ? Number(vote.vote_bull) : String(vote.vote_bull).split(",").length}</span>
                    </div>
                    <div className='items-center cursor-pointer hidden lg:flex'>
                        <img className='text-c_C85151' src={BearImg} alt='' />
                        <span className='ml-2 text-c_6E7582 font-medium text-10px lg:text-sm'>{vote.vote_bear === null ? Number(vote.vote_bear) : String(vote.vote_bear).split(",").length}</span>
                    </div>
                    
                    <img className='ml-auto cursor-pointer' src={CoinSearchSvg} alt="" />
                </div>
            </div>
        </>
    )
}

export default NewsCard