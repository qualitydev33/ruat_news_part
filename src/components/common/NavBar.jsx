import { useState } from 'react'
import {
    BsChevronDown,
    BsChevronUp
} from '../icon/IconImage'



const NavBar = ({navItems}) => {

    const [enableNavItem, setEnableNavItem] = useState(new Array(navItems.length).fill(false))

    const clickNavItemHandler = (idx) => {
        let new_array = new Array(navItems.length).fill(false)
        new_array[idx] = !enableNavItem[idx]
        setEnableNavItem(new_array)
    }

    const selectItemHandler = (event, index, index1) => {
        let all_items = document.querySelectorAll('.navbar .navbar_item')
        all_items.forEach((item) => {
            item.querySelector('div').classList.remove('block')
            item.querySelector('div').classList.add('hidden')
            item.classList.remove('bg-c_F8F9FB')
            item.classList.remove('text-c_1564C0')
            item.classList.remove('dark:text-dark_0fc9f2')
            item.classList.remove('dark:bg-transparent')
        })
        let ele = event.target
        ele.querySelector('div').classList = ele.querySelector('div').className.replace('hidden', 'block')
        ele.className += ' text-c_1564C0 bg-c_F8F9FB dark:text-dark_0fc9f2 dark:bg-transparent'

    }
    
    return (
        <div className="navbar h-full flex flex-col py-1.5 w-72 text-black dark:text-white border-r border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-60">
            {navItems.map((item, index) => {
                return (
                    <div className="flex flex-col" key={`item_${index}`}>
                        <div className="flex items-center font-semibold py-4 pl-7 pr-4 cursor-pointer"
                            onClick={() => {clickNavItemHandler(index)}}>
                            <div className="text-base">{item.title}</div>
                            <BsChevronDown className={`ml-auto stroke-1 ${enableNavItem[index] === true ? 'hidden' : 'block'}`} />
                            <BsChevronUp className={`ml-auto stroke-1 ${enableNavItem[index] === true ? 'block' : 'hidden'}`} />
                        </div>

                        <div className={`flex-col ${enableNavItem[index] === true ? 'flex' : 'hidden'}`}>
                            {item.items.map((item1, index1) => {
                                return (
                                    <div key={`items_${index1}`}
                                        className={`navbar_item relative pl-12 py-2.5 font-semibold text-sm cursor-pointer`}
                                        onClick={(event) => {selectItemHandler(event, index, index1)}}>
                                        {item1.title}
                                        <div className={`absolute top-0 left-0 h-full w-1 bg-c_1564C0 dark:bg-dark_0fc9f2 hidden`}></div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}


export default NavBar