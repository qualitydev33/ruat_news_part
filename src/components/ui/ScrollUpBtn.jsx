import React, { useEffect, useState } from "react"
import { BsChevronUp } from '../icon/IconImage'

const ScrollUpBtn = () => {

    const [enableScrollUpBtn, setEnableScrollUpBtn] = useState(false)

    const scrollToUpHandler = () => {
        window.scrollTo(
          { top: 0, behavior: 'smooth' }
        )
    }

    useEffect(() => {
        let scrollHandler = () => {
            let scroll_top = window.scrollY
            if (scroll_top > 0) {
                setEnableScrollUpBtn(true)
            }else {
                setEnableScrollUpBtn(false)
            }
        }
        window.addEventListener('scroll', () => scrollHandler())
        return window.removeEventListener('scroll', scrollHandler)
    }, [])

    return (
        <div className={`fixed flex items-center justify-center rounded-full cursor-pointer shadow-card text-white font-semibold bg-c_1564C0 dark:bg-dark_0fc9f2 ${enableScrollUpBtn === false ? 'hidden' : 'block'}
                        transform hover:scale-110 ease-out duration-700
                        bottom-5 sm:bottom-10 
                        right-5 sm:right-10
                        w-7 sm:w-12
                        h-7 sm:h-12 `}
            onClick={() => {scrollToUpHandler()}}>
                <BsChevronUp className={`text-sm sm:text-xl stroke-1`}/>
        </div>
    )
}

export default React.memo(ScrollUpBtn)