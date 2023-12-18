import React, { useContext } from 'react'
import {
    BsSunFill,
    BsFillMoonStarsFill,
} from '../../icon/IconImage'
import './ThemeToggle.css'
import { ThemeContext } from '../../contexts/ThemeContext'


const ThemeToggle = ({}) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const chooseDarkThemeHandler = () => {
        setTheme('dark')
    }
    const chooseLightThemeHandler = () => {
        setTheme('light')
    }
    return (
        <>
            <div id="theme-toggle" className="w-12 h-6 rounded-l-full rounded-r-full relative cursor-pointer
                            bg-c_E8EBF1">
                <div className={`absolute top-0 w-6 h-6 rounded-full flex items-center justify-center shadow-card transition-all duration-1000 ease-in-out 
                                ${theme === 'dark' ? 'right-0' : ' left-0'}
                                bg-white dark:bg-dark_0fc9f2`}></div>
                <div className="absolute top-0 left-0 w-6 h-6 flex justify-center items-center">
                   <BsSunFill className={`${theme === 'dark' ? 'text-c_BCC3CF' : 'text-c_2A7BD9'}`} onClick={() => {chooseLightThemeHandler()}}/>
                </div>
                <div className="absolute top-0 right-1 flex flex-col h-full">
                    <div className="my-auto">
                        <BsFillMoonStarsFill className={`${theme === 'dark' ? 'text-white' : 'text-c_BCC3CF'}`} onClick={() => {chooseDarkThemeHandler()}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ThemeToggle)