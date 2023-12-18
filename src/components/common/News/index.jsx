import { useState, useEffect, useMemo } from 'react';
import NewsCard from '../../ui/NewsCard';
import { NEWS_SAMPLE, POLL_OPTIONS, SERVER_URL, TaskFiveCategoryLi } from '../../constant';
import { convertLiToObj, firstLetterUppercase } from '../../../utils/simplefun';
import {
    BsChevronRight
} from '../../icon/IconImage'
import Loading from '../../ui/Loading';
import apiClient from '../../../utils/api';



const NewsIndex = () => {
    
    let menu_li = Array(8).fill(true)

    const [newsLi, setNewsLi] = useState([])
    const [pollOptionObj, setPollOptionObj] = useState({})
    const [menuIdx, setMenuIdx] = useState(null)

    

    useEffect(() => {
        // getNewsHandler()
        // getRssFromCTHandler()
        setPollOptionObj(convertLiToObj(POLL_OPTIONS, 'id'))
        setNewsLi(NEWS_SAMPLE)
    }, [])

    // useMemo(() => {
    //     if (!loadingManualNews && !loadingRss) {
    //         var arrayVar = newsLi.sort((a, b) => a.created_at - b.created_at)
    //         setNewsLi(NEWS_SAMPLE)
    //         setLoading(false)
    //     }
    // }, [loadingManualNews])

    // useMemo(() => {
    //     if (!loadingRss && !loadingManualNews) {
    //         var arrayVar = newsLi.sort((a, b) => a.created_at - b.created_at)
    //         setNewsLi(arrayVar)
    //         setLoading(false)
    //     }
    // }, [loadingRss])

    

    return (
        <>
            <div>
                <div className={`mb-9 items-center gap-x-1 text-sm font-semibold ${window.location.pathname === TaskFiveCategoryLi[0].link ? 'hidden' : 'hidden lg:flex'}`}>
                    <span className='text-c_6E7582'>Altsome News</span>
                    <BsChevronRight />
                    <span>{firstLetterUppercase(String(window.location.pathname).replace(TaskFiveCategoryLi[0].link, '').replace('/', ''))}</span>
                </div>
                <div className='flex items-start'>
                    <div className='flex flex-col flex-1'>
                        {newsLi.length !== 0 && newsLi.map((item, idx)=> {
                            return <div key={`news_${idx}`} className="mb-3.5 lg:mb-6">
                                <NewsCard newsItem={item} pollOptionObj={pollOptionObj} />
                            </div>
                        })}
                        {newsLi.length === 0 &&
                            <div className='text-4xl font-semibold text-c_BCC3CF text-center'>No News</div>
                        }
                    </div>
                    <div className='rounded-md p-9 ml-9 flex-col
                                    text-black dark:text-white shadow-card bg-white
                                    w-40 xl:w-80
                                    hidden lg:flex'>
                        {menu_li.map((item, idx) => {
                            return <div key={`item_${idx}`} className='mb-8'>
                                <button className={`text-sm font-semibold ${menuIdx === idx ? 'text-c_1564C0' : 'text-black'} transform hover:scale-110 ease-out duration-700`}
                                        onClick={() => setMenuIdx(idx)}>Menu {idx + 1}</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default NewsIndex