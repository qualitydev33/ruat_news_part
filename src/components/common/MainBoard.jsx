import { useContext, useState } from 'react'
import {
    BsGlobe2,
    BsCurrencyDollar,
    Logo,
    BsList,
    BsX
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle'
import { ThemeContext } from "../contexts/ThemeContext"
import ScrollUpBtn from "../ui/ScrollUpBtn"
import SignInModal from "./SignInModal"
import SignUpModal from "./SignUpModal"


import Task5 from "../../pages/Task5"


const MainBoard = () => {
    let menu_li = [
        {title: 'Menu 1', link: ''},
        {title: 'Menu 2', link: ''},
        {title: 'Menu 3', link: ''},
        {title: 'Menu 4', link: ''},
        {title: 'Menu 5', link: ''},
        {title: 'Menu 6', link: ''}
    ]
    let language_li = ['English', 'Hindi', 'Russian']
    let currency_li = ['USD', 'Rupee', 'Ruble']
    let submenu_li = ['Sub Menu 01', 'Sub Menu 02', 'Sub Menu 03', 'Sub Menu 04', 'Sub Menu 05', 'Sub Menu 06']

    const {theme, setTheme} = useContext(ThemeContext)
    const [enableMobileMenu, setEnableMobileMenu] = useState(false)
    const [language, setLanguage] = useState(language_li[0])
    const [currency, setCurrency] = useState(currency_li[0])
    const [enableSubMenu, setEnableSubmenu] = useState([true, new Array(submenu_li.length - 1).fill(false)])
    const [enableSignInModal, setEnableSignInModal] = useState(false)
    const [eanbleSignUpModal, setEnableSignUpModal] = useState(false)

    const subMenuHandler = (index) => {
        let new_array = new Array(submenu_li.length).fill(false)
        new_array[index] = true
        setEnableSubmenu(new_array)
    }

    const closeMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableMobileMenu(false)
    }
    const openMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableMobileMenu(true)
    }

    const openSignInModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        if (eanbleSignUpModal) {
            setEnableSignUpModal(false)
        }
        setEnableSignInModal(true)
    }

    const closeSignInModalHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableSignInModal(false)
    }

    const openSignUpModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        if (enableSignInModal) {
            setEnableSignInModal(false)
        }
        setEnableSignUpModal(true)
    }
    
    const closeSignUpModalHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableSignUpModal(false)
    }

    return (
        <div className="flex-1 w-0 max-w-6xl mr-auto">
            <div className={`w-full 
                            bg-c_F8F9FB dark:bg-transparent sm:bg-c_F8F9FB sm:dark:bg-gray-900
                             rounded-none sm:rounded-3xl
                             pb-20 sm:pb-0
                             mb-0 sm:mb-10`}>
                <div className="items-center pb-6
                                pt-3 sm:pt-6
                                block sm:flex">
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    ml-0 sm:ml-auto
                                    mb-3 sm:mb-0">
                        <div className="flex items-center">
                            <BsGlobe2 className="text-c_1564C0 dark:text-dark_0fc9f2 ml-1" />
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-5 z-10"
                                    option_li={language_li} 
                                    default_option={language_li[0]}
                                    returnVal={setLanguage}
                                />
                            </div>
                        </div>
                        <div className="flex items-center
                                        ml-auto sm:ml-8
                                        mr-auto sm:mr-0">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center p-0.5
                                            bg-c_1564C0 dark:bg-dark_0fc9f2">
                                <BsCurrencyDollar className="text-white"/>
                            </div>
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-5 z-10"
                                    option_li={currency_li} 
                                    default_option={currency_li[0]}
                                    returnVal={setCurrency}
                                />
                            </div>
                        </div>
                        <div className="ml-0 sm:ml-10">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="h-0.5 w-full
                                    block sm:hidden
                                  bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    mt-5 sm:mt-0">
                        <div className="rounded-full w-7 h-7 items-center justify-center text-xl cursor-pointer font-bold text-white bg-c_1564C0 dark:bg-dark_0fc9f2
                                        flex sm:hidden">
                            <BsList className="stroke-1" onClick={() => {openMobileMenuHandler()}}/>
                        </div>
                        <div className="block sm:hidden pl-4">
                            <Logo color={`${theme === 'dark' ? '#0fc9f2' : '#1564c0'}`} className=""/>
                        </div>
                        <button className="h-7_5 w-20 flex items-center justify-center text-sm rounded-l-full rounded-r-full transform hover:scale-110 ease-out duration-700
                                            ml-auto sm:ml-0
                                            bg-c_1564C0 text-white dark:bg-dark_0fc9f2"
                                onClick={() => {openSignInModalHandler()}}>Sign In</button>
                    </div>
                </div>

                <div className="h-0.5 w-full
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                <div className="w-full flex flex-col px-4
                                py-5 sm:py-10">
                    <div className={`mx-auto items-center justify-center flex-wrap gap-3
                                    w-full
                                    px-3 xl:px-0
                                    ${window.location.href.includes('/task5') ? 'hidden' : 'flex'}`}>
                        {submenu_li.map((item, index) => {
                            return <div key={`submenu_${index}`} 
                                        className={`w-32 flex justify-center items-center rounded-r-full rounded-l-full cursor-pointer ${enableSubMenu[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-white text-black font-semibold'}
                                                    transform hover:scale-110 ease-out duration-700
                                                    shadow-card dark:shadow-dark_card
                                                    h-6_5 sm:h-7_5
                                                    text-xs sm:text-sm`}
                                        onClick={() => {subMenuHandler(index)}}>{item}</div>
                        })}
                    </div>
                    <Task5 />
                    
                </div>
            </div>

            <ScrollUpBtn />

            {/* mobile menu */}
            {enableMobileMenu &&
                <div className="fixed top-0 left-0 w-full h-screen bg-c_1564C0 dark:bg-gray-900 text-white">
                    <div className="w-full h-full relative p-10">
                        <div className="flex items-center">
                            <div className="text-lg font-semibold">MENUS</div>
                            <div className="ml-auto text-4xl text-c_1564C0 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                                <BsX className="stroke-0.5" onClick={() => {closeMobileMenuHandler()}}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-10 mt-10">
                            {menu_li.map((item, index) => {
                                return <div key={`leftside_${index}`} 
                                            className="flex items-center text-sm font-medium
                                                       cursor-pointer transform hover:scale-105 ease-out duration-700" 
                                            onClick={() => {closeMobileMenuHandler()}}>
                                            <div className="w-6 h-6 rounded-full bg-white mr-4"></div>
                                            <div className="">{item.title}</div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            }

            {/* signin modal */}
            {enableSignInModal && <SignInModal cancelSignInModalHandler={closeSignInModalHandler} openSignUpModalHandler={openSignUpModalHandler} />}

            {/* signup modal */}
            {eanbleSignUpModal && <SignUpModal cancelSignUpModalHandler={closeSignUpModalHandler} openSignInModalHandler={openSignInModalHandler}/>}
        </div>
    )
}

export default MainBoard