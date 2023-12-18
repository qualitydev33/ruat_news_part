import React, { useState } from "react";
import {
    FaCaretDown,
    FaCaretUp,
    BsGenderMale,
    BsGenderFemale,
} from  '../icon/IconImage'
import ClickOutside from "./click-outside/click-outside";



// option data type: string or object

// in object case
// {
//     title: '',
//     ...

// }

// if object includes image
// {
//     title: '',
//     img: '',
//     ...
// }


const SelectInput = ({
    option_li, 
    className, 
    option_board_class, 
    enable_img, 
    img_class, 
    option_class, 
    default_option, 
    enable_underline,
    data_type, 
    returnVal
}) => {
    const [enableSelect, setEnableSelect] = useState(false)
    const [currentVal, setCurrentVal] = useState(default_option)

    const updateCurrentVal = (index) => {
        let item = option_li[index]
        setCurrentVal(item)
        setEnableSelect(false)
        typeof(item) === 'string' ? returnVal(item) : returnVal(item.title)
    }
    
    return <ClickOutside active={enableSelect} onClick={() => setEnableSelect(false)}>
                <div>
                    <div className={`relative cursor-pointer ${className}`} onClick={() => {setEnableSelect(!enableSelect)}}>
                        <div className="flex items-center relative w-full">
                            {data_type === undefined &&
                                <div className={`flex items-center`}>
                                    <img src={currentVal.img} className={`${img_class} ${enable_img === true ? 'block' : 'hidden'}`}></img>
                                    <div className={currentVal === default_option ? `text-c_00080D` : ''}>{typeof(currentVal) === 'string' ? currentVal : currentVal.title}</div>
                                </div>
                            }
                            {data_type !== undefined && data_type === 'gender' &&
                                <div className={`flex items-center`}>
                                    <BsGenderFemale className={`${img_class} ${currentVal.title === 'Female' ? 'block' : 'hidden'}`} />
                                    <BsGenderMale className={`${img_class} ${currentVal.title === 'Male' ? 'block' : 'hidden'}`} />
                                    <div className={currentVal === default_option ? `text-c_00080D` : ''}>{currentVal.title}</div>
                                </div>
                            }
                            <div className="absolute top-0 right-0 flex flex-col h-full">
                                <div className="my-auto">
                                    {!enableSelect && <FaCaretDown />}
                                    {enableSelect && <FaCaretUp />}
                                </div>
                            </div>
                        </div>
                        {enableSelect && 
                            <div className={`absolute left-0 w-full ${option_board_class}
                                            shadow-card dark:shadow-dark_card`}>
                                <div className="max-h-80 overflow-y-auto text-c_00080D">
                                    {option_li.map((item, index) => {
                                        return <div key={`index_${index}`} 
                                                    onClick={() => {updateCurrentVal(index)}}> 
                                                    {
                                                        typeof(item) === 'string' && data_type === undefined &&
                                                        <div className={`py-2 flex items-center justify-center border-c_00080D cursor-pointer ${option_class} hover:opacity-75`}>
                                                            {item}
                                                        </div>
                                                    }
                                                    {
                                                        typeof(item) !== 'string' && enable_img !== true && data_type === undefined &&
                                                        <div className={`py-2 flex items-center justify-center border-c_00080D cursor-pointer ${option_class} hover:opacity-75`}>
                                                            {item.title}
                                                        </div>
                                                    }
                                                    {
                                                        typeof(item) !== 'string' && enable_img === true && data_type === undefined &&
                                                        <div className={`py-2 flex items-center border-c_00080D cursor-pointer ${option_class}`}>
                                                            <img src={item.img} className={`ml-2 ${img_class}`}></img>
                                                            <div className={` hover:opacity-75`}>
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                        
                                                    }
                                                    {
                                                        typeof(item) !== 'string' && data_type === 'gender' &&
                                                        <div className={`py-2 flex items-center border-c_00080D cursor-pointer ${option_class}`}>
                                                            <BsGenderFemale className={`ml-3 ${img_class} ${item.title === 'Female' ? 'block' : 'hidden'}`}/>
                                                            <BsGenderMale className={`ml-3 ${img_class} ${item.title === 'Male' ? 'block' : 'hidden'}`} />
                                                            <div className={` hover:opacity-75`}>
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    }
                                                    {index !== option_li.length - 1 && enable_underline && 
                                                        <div className="h-px bg-transparent mx-5"></div>    
                                                    }
                                                </div>
                                    })}
                                </div>
                            </div>
                        }
                    </div>        
                </div>
            </ClickOutside>

            
}

export default React.memo(SelectInput)