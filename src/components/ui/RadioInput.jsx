import { useState } from "react"

import {
    BsCheck2
} from '../icon/IconImage'

const RadioInput = ({
    radio_li,
    radio_default_idx,
    returnVal,
    disabled
}) => {
    const [radioIdx, setRadioIdx] = useState(radio_default_idx)

    const updateRadioHandler = (idx) => {
        if (disabled) {return}
        setRadioIdx(idx)
        returnVal(idx)
    }
    return (
        <div>
            {radio_li.map((item, idx) => {
                return (
                    <div key={`item_${idx}`} className='flex items-center cursor-pointer mb-2 lg:mb-7' onClick={() => updateRadioHandler(idx)}>
                        <div className={`w-4_5 h-4_5 lg:w-6 lg:h-6 rounded-full border-c_BCC3CF flex items-center justify-center ${idx === radioIdx ? 'border-none' : 'border'}`}>
                            <div className={`bg-opacity-50 w-full h-full rounded-full items-center justify-center bg-c_2A7BD9 dark:bg-dark_0fc9f2 ${idx === radioIdx ? 'flex' : 'hidden'}`}>
                                <BsCheck2 className="text-white stroke-1" />
                            </div>
                        </div>
                        <span htmlFor="poll-review" className='ml-3 font-semibold text-10px lg:text-sm'>{typeof(item) === 'object' ? item.title : item}</span>
                    </div>
                )
            })}
        </div>
    )
}


export default RadioInput