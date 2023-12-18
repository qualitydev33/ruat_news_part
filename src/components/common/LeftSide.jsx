import { useContext, useState } from "react"
import { 
    Logo
} from "../icon/IconImage"
import { ThemeContext } from '../contexts/ThemeContext'

const LeftSide = ({className}) => {
    let menu_li = [
        {title: 'Menu 1', link: ''},
        {title: 'Menu 2', link: ''},
        {title: 'Menu 3', link: ''},
        {title: 'Menu 4', link: ''},
        {title: 'Menu 5', link: ''},
        {title: 'Menu 6', link: ''}
    ]
    const {theme, setTheme} = useContext(ThemeContext)
    const [enableMenu, setEnableMenu] = useState([true, new Array(menu_li.length - 1).fill(false)])

    const menuHandler = (index) => {
        let new_array = new Array(menu_li.length).fill(false)
        new_array[index] = true
        setEnableMenu(new_array)
    }

    return (
        <>
            <div className={`flex flex-col w-52 ${className}`}>
                <div className="mt-7_5">
                    <Logo color={`${theme === 'dark' ? '#0fc9f2' : '#1564c0'}`} className=""/>
                </div>
                <div className="flex flex-col mt-7_5">
                    {menu_li.map((item, index) => {
                        return <div key={`menu_${index}`} 
                                    className={`font-semibold flex items-center mt-7_5 text-sm cursor-pointer text-black dark:text-white ${enableMenu[index] === true ? 'text-c_1564C0 dark:text-dark_0fc9f2' : ''}`}
                                    onClick={() => {menuHandler(index)}}>
                                    <div className="w-6 h-6 rounded-full bg-c_E8EBF1"></div>
                                    <div className="ml-2 transform hover:scale-110 ease-out duration-700">{item.title}</div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default LeftSide