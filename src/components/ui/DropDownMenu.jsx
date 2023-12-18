
// dropDownList: [{title: string, link: string}, {title: string, link: string}, ...]

import { useState } from 'react'
import {
    BsChevronDown,
    BsChevronUp
} from '../icon/IconImage'

const DropDownMenu = ({dropDownItems}) => {
    const [enableItems, setEnableItems] = useState(false)
    const [selectItem, setSelectItem] = useState(new Array(dropDownItems.items.length).fill(false))
    
    const clickMenuHandler = () => {
        setEnableItems(!enableItems)
    }
    const selectItemHandler = (index) => {
        let new_array = new Array(dropDownItems.items.length).fill(false)
        new_array[index] = true
        setSelectItem(new_array)
    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center font-semibold py-4 pl-7 pr-4 cursor-pointer"
                onClick={() => {clickMenuHandler()}}>
                <div className="text-base">{dropDownItems.title}</div>
                <BsChevronDown className={`ml-auto stroke-1 ${enableItems === true ? 'hidden' : 'block'}`} />
                <BsChevronUp className={`ml-auto stroke-1 ${enableItems === true ? 'block' : 'hidden'}`} />
            </div>

            <div className={`flex-col ${enableItems === true ? 'flex' : 'hidden'}`}>
                {dropDownItems.items.map((item, index) => {
                    return (
                        <div key={`items_${index}`}
                            className={`relative pl-12 py-2.5 font-semibold text-sm cursor-pointer hover:bg-c_F8F9FB
                                        ${selectItem[index] === true ? 'text-c_1564C0 bg-c_F8F9FB' : 'text-black bg-white'}`}
                            onClick={() => {selectItemHandler(index)}}>
                            {item.title}
                            <div className={`absolute top-0 left-0 h-full w-1 bg-c_1564C0 ${selectItem[index] === true ? 'block' : 'hidden'}`}></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default DropDownMenu