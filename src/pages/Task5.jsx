import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewsIndex from '../components/common/News';
import NewsDetail from '../components/common/News/detail';

import {
    BsChevronLeft
} from '../components/icon/IconImage'
import { TaskFiveCategoryLi } from '../components/constant';

const Task5 = () => {
    const navigate = useNavigate()
    const [submenuIdx, setSubmenuIdx] = useState(0)
    const subMenuHandler = (idx) => {
        setSubmenuIdx(idx)
        navigate(`${TaskFiveCategoryLi[idx].link}`)
    }
    const gotoHomeCategoryHandler = () => {
        setSubmenuIdx(0)
        navigate(`${TaskFiveCategoryLi[0].link}`)
    }
    return (
        <div>
            <div className='relative flex flex-col'>
                <div className={`absolute left-0 items-center gap-x-2 cursor-pointer h-6_5 sm:h-7_5 ${submenuIdx !== 0 ? 'hidden lg:flex' : 'hidden'}`}
                    onClick={() => gotoHomeCategoryHandler()}>
                    <BsChevronLeft className='stroke-1.5 text-xs text-c_1564C0' />
                    <span className='font-semibold text-sm text-c_1564C0 dark:text-dark_0fc9f2'>Back</span>
                </div>
                <div className={`mx-auto flex items-center justify-center flex-wrap gap-3
                                w-full
                                mb-6 lg:mb-12_5
                                px-3 xl:px-0`}>
                    {TaskFiveCategoryLi.map((item, idx) => {
                        return <div key={`submenu_${idx}`} 
                                    className={`px-4 flex justify-center items-center rounded-r-full rounded-l-full cursor-pointer ${submenuIdx === idx ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-transparent text-black font-semibold'}
                                                transform hover:scale-110 ease-out duration-700
                                                h-6_5 sm:h-7_5
                                                text-xs sm:text-sm`}
                                    onClick={() => {subMenuHandler(idx)}}>{item.title}</div>
                    })}
                </div>
            </div>
            <Routes>
                {TaskFiveCategoryLi.map((item, idx) => {
                    return <Route path={`${item.link}`} key={`item_${idx}`} exact element={<NewsIndex />}></Route>
                })}
                {TaskFiveCategoryLi.map((item, idx) => {
                    return <Route path={`${item.link}/:newsId`} key={`item_${idx}`} exact element={<NewsDetail />}></Route>
                })}
            </Routes>
        </div>
    )
}

export default Task5