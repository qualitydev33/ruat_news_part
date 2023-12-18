import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import apiClient from '../../../utils/api'
import { NEWS_SAMPLE, POLL_OPTIONS, SERVER_URL } from '../../constant'
import {
    BsChevronRight,
    WarnImg,
    BsFillShareFill,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    BullImg,
    BearImg,
    CoinSearchSvg
} from '../../icon/IconImage'
import Loading from '../../ui/Loading'
import RadioInput from '../../ui/RadioInput'
import Component19 from '../Component19/Component19'

const NewsDetail = () => {
    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    ]
    const newsId = useParams()
    const { state } = useLocation()
    const [newsItem, setNewsItem] = useState({})
    console.log(NEWS_SAMPLE[2].detail)
    const [pollOptionLi, setPollOptionLi] = useState(POLL_OPTIONS)
    const [selectedPollOptionIdx, setSellectedPollOptionIdx] = useState(-1)
    const [submited, setSubmited] = useState(false)
    const [enableReadmore, setEnableReadmore] = useState(false)
    const [enableLess, setEnableLess] = useState(false)
    

    const detailEle = useRef(null)

    
    const submitPollOptionHandler = () => {
        setSubmited(true)
        return
        var formData = new FormData()
        formData.append('newsId', newsId.newsId)
        formData.append('selected_poll', pollOptionLi[selectedPollOptionIdx].id);
        axios({
            method: 'POST',
            url: `${SERVER_URL}/api/update_news_selectedpoll`,
            data: formData
        })
        .then(res => {})
        .catch(error => console.log(error))
    }

    // const voteHandler = (id, name) => {
    //     var formData = new FormData()
    //     formData.append('id', id)
    //     formData.append('name', name)
    //     formData.append('client_id', window.localStorage.getItem('client'))
    //     apiClient({
    //         method: 'POST',
    //         url: `${newsItem.type === 'rss' ? '/api/rss/ct/update_vote' : '/api/news/update_vote'}`,
    //         data: formData
    //     })
    //     .then(res => {
    //         if (res.data.status === 200) {
    //             setNewsItem(res.data.data)
    //         }
    //     })
    //     .catch(error => console.log(error))
    // }

    const clickReadmoreHandler = () => {
        setEnableReadmore(false)
        setEnableLess(true)
    }

    const clickLessHandler = () => {
        setEnableReadmore(true)
        setEnableLess(false)
    }
    
    useEffect(() => {
        setNewsItem(NEWS_SAMPLE[newsId.newsId])
        // var url = `${SERVER_URL}${state.type === "rss" ? '/api/rss_detail/ct/' : '/api/news_detail/'}${newsId.newsId}`
        // axios({
        //     method: 'GET',
        //     url: url
        // })
        // .then(res => {
        //     if (res.data.status === 200) {
        //         if (res.data.data.news.type === 'rss') {
        //             var domParse = new window.DOMParser().parseFromString(res.data.data.news.detail, "text/html")
        //             res.data.data.news.detail = domParse.body.innerText
        //         }
        //         setNewsItem(res.data.data.news)
        //         setPollOptionLi(res.data.data.pollOptions)

        //         if (detailEle.current.offsetHeight < 80) {
        //             setEnableReadmore(false)
        //             setEnableLess(false)
        //         }else {
        //             setEnableReadmore(true)
        //             setEnableLess(false)
        //         }
        //     }
        // })
        // .catch(error => console.log(error))
    }, [])


    return (
        <>
            <div className="text-black dark:text-white text-sm font-medium flex flex-col">
                <div className="hidden lg:flex items-center mb-7_5">
                    <span className='text-c_6E7582'>Altsome News</span>
                    <BsChevronRight className='ml-1 text-10px stroke-1' />
                    <span className='text-c_6E7582 ml-1'>Category 2</span>
                    <BsChevronRight className='ml-1 text-10px stroke-1' />
                    <span className='ml-1'>Sub Category 3</span>
                </div>
                <div className='flex'>
                    <div className='flex flex-1 flex-col'>
                        <div className="flex flex-col rounded-md 
                                        shadow-card dark:shadow-dark_card bg-white dark:bg-transparent">
                            <div className="py-2.5 lg:py-4">
                                <div className='flex flex-col px-4 lg:px-5'>
                                    <div className="flex items-center text-10px lg:text-sm">
                                        <span className="font-bold text-c_1564C0 dark:text-dark_0fc9f2">{String(newsItem.type).toUpperCase()}</span>
                                        <div className="bg-c_E8EBF1 h-4_5 w-px mx-2.5"></div>
                                        <div className="font-semibold text-c_6E7582">2 Min ago</div>
                                        <div className="flex items-center ml-auto cursor-pointer">
                                            <img src={WarnImg} alt='warn img'></img>
                                            <span className='ml-2'>Report</span>
                                        </div>
                                        <div className="flex items-center ml-6 cursor-pointer">
                                            <BsFillShareFill className='text-c_1564C0 dark:text-dark_0fc9f2' />
                                            <span className='ml-2'>Share</span>
                                        </div>
                                    </div>
                                    {newsItem.type !== 'polls' ? 
                                        <div className='mt-2.5 font-semibold cursor-pointer text-xs lg:text-xl'>{newsItem.title}</div>
                                        :
                                        <div className='mt-2.5 font-semibold cursor-pointer text-xs lg:text-xl'>Polls by RUAT</div>
                                    }
                                    
                                    <div className='text-c_6E7582 mt-0 lg:mt-3 text-10px lg:text-sm'>11/22/2021</div>
                                </div>
                                <div className='hidden lg:block w-full h-px my-4 bg-c_E8EBF1 dark:bg-dark_0fc9f2'></div>
                                <div className='w-full flex flex-col mt-3 leading-14_16 px-4 lg:px-5 mb-1 lg:mb-7_5'>
                                    <img className='rounded-lg mx-auto w-full shadow-card dark:shadow-dark_card' src={newsItem.url} alt="" />
                                    <div className='font-bold mt-7 text-xs lg:text-xl'>{newsItem.type === 'polls' ? newsItem.title : 'Overview'}</div>
                                    <div className={``}>
                                        <p ref={detailEle} className={`text-xs lg:text-sm mt-2_5 ${enableReadmore ? 'textellipsis_4' : ''}`}>{newsItem.detail}</p>
                                        <span className='text-c_1564C0 cursor-pointer text-10px lg:text-sm' onClick={() => clickReadmoreHandler()}>{enableReadmore? 'Read more' : ''}</span>
                                        <span className='text-c_1564C0 cursor-pointer text-10px lg:text-sm' onClick={() => clickLessHandler()}>{enableLess? 'Less' : ''}</span>
                                        
                                    </div>
                                    
                                    
                                    {newsItem.type === 'polls' && pollOptionLi.length !== 0 && 
                                        <div className='mt-7 mb-5 lg:mb-12_5'>
                                            <RadioInput radio_li={pollOptionLi} returnVal={setSellectedPollOptionIdx} disabled={submited}/>
                                            <div className='flex flex-col mt-7'>
                                                <button className={`mx-auto items-center px-5 rounded-full font-medium
                                                                    h-6 lg:h-7_5
                                                                    text-11px lg:text-sm
                                                                    ${submited ? 'hidden' : 'flex'}
                                                                    ${selectedPollOptionIdx === -1 ? 'bg-c_E8EBF1 text-c_BCC3CF' : ' bg-c_1564C0 text-white'}
                                                                    transform hover:scale-105 ease-out duration-700`}
                                                        disabled={selectedPollOptionIdx === -1 ? true : false}
                                                        onClick={() => submitPollOptionHandler()}>Submit</button>
                                                <button className={`mx-auto items-center px-5 rounded-full font-medium bg-c_64A879 text-white
                                                                    h-6 lg:h-7_5
                                                                    text-11px lg:text-sm
                                                                    ${submited ? 'flex' : 'hidden'}`}
                                                        disabled>Thank You</button>
                                            </div>
                                        </div>
                                    }
    
                                    <div className='flex items-start mt-3 text-11px lg:text-sm'>
                                        <span className='w-30'>Source</span>
                                        <a href={newsItem.link} target="_blank" className='flex-1 underline cursor-pointer text-c_1564C0 break-all'>:{newsItem.link}</a>
                                    </div>
                                    <div className='flex items-start mt-3 text-11px lg:text-sm'>
                                        <span className='w-30'>Imagesource</span>
                                        <a href={SERVER_URL + newsItem.url} target="_blank" className='flex-1 underline cursor-pointer text-c_1564C0 break-all'>:{SERVER_URL + newsItem.url}</a>
                                    </div>
                                    <div className='flex items-start mt-3 text-11px lg:text-sm'>
                                        <span className='w-30'>Note</span>
                                        <span className='flex-1'>: All copyrights and trademarks used in this article belongs to the respective media outlet.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className='mt-7_5 flex items-center justify-center gap-x-2 w-full'>
                            <div className='flex items-center justify-center rounded-md cursor-pointer bg-white dark:bg-transparent shadow-card dark:shadow-dark_card h-6 lg:h-9_5 w-16 lg:w-25'
                                >
                                <IoTrendingUpSharp className=' text-c_64A879 stroke-1' />
                                <span className='ml-2 text-c_6E7582 text-11px lg:text-sm'>{newsItem.vote_up === null ? Number(newsItem.vote_up) : String(newsItem.vote_up).split(",").length}</span>
                            </div>
                            <div className='flex items-center justify-center rounded-md cursor-pointer bg-white dark:bg-transparent shadow-card dark:shadow-dark_card h-6 lg:h-9_5 w-16 lg:w-25'
                                >
                                <IoTrendingDownSharp className='text-c_C85151 stroke-0.5' />
                                <span className='ml-2 text-c_6E7582 text-11px lg:text-sm'>{newsItem.vote_down === null ? Number(newsItem.vote_down) : String(newsItem.vote_down).split(",").length}</span>
                            </div>
                            <div className='flex items-center justify-center rounded-md cursor-pointer bg-white dark:bg-transparent shadow-card dark:shadow-dark_card h-6 lg:h-9_5 w-16 lg:w-25'
                                >
                                <MdQuestionAnswer className='text-c_7EAFE8' />
                                <span className='ml-2 text-c_6E7582 text-11px lg:text-sm'>{newsItem.vote_comment === null ? Number(newsItem.vote_comment) : String(newsItem.vote_comment).split(",").length}</span>
                            </div>
                            <div className='flex items-center justify-center rounded-md cursor-pointer bg-white dark:bg-transparent shadow-card dark:shadow-dark_card h-6 lg:h-9_5 w-16 lg:w-25'
                                >
                                <img className='text-c_7EAFE8' src={BullImg} alt='' />
                                <span className='ml-2 text-c_6E7582 text-11px lg:text-sm'>{newsItem.vote_bull === null ? Number(newsItem.vote_bull) : String(newsItem.vote_bull).split(",").length}</span>
                            </div>
                            <div className='flex items-center justify-center rounded-md cursor-pointer bg-white dark:bg-transparent shadow-card dark:shadow-dark_card h-6 lg:h-9_5 w-16 lg:w-25'
                                >
                                <img className='text-c_C85151' src={BearImg} alt='' />
                                <span className='ml-2 text-c_6E7582 text-11px lg:text-sm'>{newsItem.vote_bear === null ? Number(newsItem.vote_bear) : String(newsItem.vote_bear).split(",").length}</span>
                            </div>
                        </div>
    
                        <div className="mt-8 hidden lg:block">
                            <Component19 />
                        </div>
                    </div>
                    <div className="ml-7 max-w-346px rounded-lg flex-col
                                    hidden xl:flex">
                        <div className="font-semibold text-22px leading-loose">Featured</div>
                        <div className="flex flex-col gap-y-3">
                            {heading_card_li.map((item, index) => {
                                return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                        shadow-card dark:shadow-dark_card
                                                        bg-white dark:bg-transparent" 
                                            key={`heading_card_${index}`}>
                                            <div className="flex font-semibold leading-normal
                                                            text-black dark:text-white
                                                            text-xs sm:text-sm">{item.detail}</div>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                                    <IoTrendingUpSharp />
                                                    <div className="ml-1.5">{item.tradeUp}</div>
                                                </div>
                                                <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                                    <IoTrendingDownSharp />
                                                    <div className="ml-1.5">{item.tradeDown}</div>
                                                </div>
                                                <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                                    <MdQuestionAnswer />
                                                    <div className="ml-1.5">{item.question}</div>
                                                </div>
                                                <img src={CoinSearchSvg} className="ml-auto" alt=""></img>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default NewsDetail