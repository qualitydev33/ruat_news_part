import {
    BsSliders,
    MdSend,
    MdThumbUpAlt,
    MdThumbDownAlt,
    BsChatRightFill,
} from '../../icon/IconImage'

const Component19 = () => {

    let comment_li = [
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        { name: 'User Name', created: '1 Day ago', like: 4, unlike: 2, msg: 2, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
    ]

    return (
        <div className="max-w-2xl">
            <div className="flex items-center text-sm leading-tight
                            text-black dark:text-white">
                <div className="font-bold">Comments 05</div>
                <div className="ml-auto text-black dark:text-dark_0fc9f2 stroke-1">
                    <BsSliders/>
                </div>
            </div>

            <div className="mt-4_5 flex items-center">
                <img src="https://www.ialagency.com/wp-content/uploads/2019/08/Jasper1-150x150.jpg" alt="" 
                    className="w-9_5 h-9_5 rounded-full dark:shadow-dark_card" />
                <div className="flex-1 ml-3 relative">
                    <input type="text"
                        className="pl-4 pr-8 h-8 w-full rounded-lg placeholder-c_BCC3CF text-sm border
                                bg-c_E8EBF1 dark:bg-transparent dark:border-dark_0fc9f2
                                text-black dark:text-white"
                        placeholder="Add a comment"/>
                    <div className="absolute top-0 right-4 h-full text-lg flex flex-col
                                    text-c_BCC3CF dark:text-dark_0fc9f2">
                        <MdSend className="my-auto cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="mt-6 mb-5 w-full h-px
                            bg-c_BCC3CF dark:bg-dark_0fc9f2"></div>

            <div>
                {comment_li.map((item, index) => {
                    return (
                        <div key={`item_${index}`}>
                            <div className="flex items-start">
                                <img src="https://www.ialagency.com/wp-content/uploads/2019/08/Jasper1-150x150.jpg" alt="" 
                                    className="w-9_5 h-9_5 rounded-full dark:shadow-dark_card" />
                                <div className="ml-3.5 flex flex-col">
                                    <div className="flex items-center text-xs leading-normal font-medium
                                                    text-c_6E7582 dark:text-dark_0fc9f2">
                                        <div>{item.name}</div>
                                        <div className="ml-5">{item.created}</div>
                                    </div>
                                    <div className="font-semibold leading-14_18
                                                    text-black dark:text-white
                                                    text-xs sm:text-sm">{item.detail}</div>
                                    <div className="mt-3 flex items-center
                                                    text-c_6E7582 dark:text-dark_0fc9f2">
                                        <div className="flex items-center text-xs leading-normal">
                                            <MdThumbUpAlt className="text-lg"/>
                                            <div className="font-medium ml-1.5">{item.like}</div>
                                        </div>
                                        <div className="ml-10 flex items-center text-xs leading-normal">
                                            <MdThumbDownAlt className="text-lg"/>
                                            <div className="font-medium ml-1.5">{item.unlike}</div>
                                        </div>
                                        <div className="ml-10 flex items-center text-xs leading-normal">
                                            <BsChatRightFill className="text-base"/>
                                            <div className="font-medium ml-1.5">{item.unlike}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`my-3 w-full h-px ${index === comment_li.length - 1 ? 'hidden' : 'block'}
                                            bg-c_F2F2F2 dark:bg-dark_0fc9f2`}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Component19