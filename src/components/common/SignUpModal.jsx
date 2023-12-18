import { useEffect, useState } from 'react'
import {
    BsX,
    BsCalendarEvent,
    MaleSvg,
    FemaleSvg
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import { validateEmail } from '../../utils/simplefun'
import MyDatePicker from '../ui/MyDatePicker/MyDatePicker'

const SignUpModal = ({cancelSignUpModalHandler, openSignInModalHandler}) => {

    let country_li = [
        {title: 'India', img: 'https://th.bing.com/th/id/R.9a3e99c471ff6217b31376da021d0c37?rik=6Ll1L58110KuXQ&pid=ImgRaw&r=0', value: 'in'},
        {title: 'Russia', img: 'https://www.listenandlearn.org/blog/wp-content/uploads/2020/05/russian-flag-russian-flag-russia-flag-of-russia.jpg', value: 'ru'}
    ]

    let gender_li = [
        {title: 'Male', value: 'male', img: MaleSvg},
        {title: 'Female', value: 'female', img: FemaleSvg}
    ]

    const [country, setCountry] = useState(country_li[0])
    const [gender, setGender] = useState(gender_li[0])
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [uname, setUName] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userCountry, setUserCountry] = useState('')
    const [userGender, setUserGender] = useState('')
    const [enablePolicy, setEnablePolicy] = useState(false)
    const [enableCustomPolicy, setEnableCustomPolicy] = useState(false)
    const [disabledSignUpBtn, setDisabledSignUpBtn] = useState(true)

    const getEmailHandler = (str) => {
        setEmail(str)
    }

    const getPasswordHandler = (str) => {
        setPassword(str)
    }

    const getFNameHandler = (str) => {
        setFName(str)
    }

    const getLNameHandler = (str) => {
        setLName(str)
    }
    
    const getUNameHandler = (str) => {
        setUName(str)
    }

    const getBirthHandler = (str) => {
        setBirth(str)
    }

    

    useEffect(() => {
        if (validateEmail(email) && password !== '' && fname !== '' && lname !== '' && birth !== '' && uname !== '' && enablePolicy && enableCustomPolicy) {
            setDisabledSignUpBtn(false)
        }else {
            setDisabledSignUpBtn(true)
        }
    }, [fname, lname, uname, birth, email, password, enablePolicy, enableCustomPolicy])

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                        px-3 sm:px-0">
            <div className="m-auto w-full max-w-430px pt-7_5 pb-10 px-8 rounded-md
                            bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card">
                <div className="flex items-center">
                    <div className="text-28px font-semibold">Create an account</div>
                    <BsX className="text-c_BCC3CF text-3xl ml-auto cursor-pointer"
                        onClick={() => {cancelSignUpModalHandler()}}/>
                </div>
                <div className="mt-2 text-c_6E7582 text-xs leading-normal">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</div>
                <div className="grid grid-cols-2 gap-x-3 mt-15">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">First Name
                                {fname === '' &&
                                    <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                                }
                            </div>
                            
                        </div>
                        <input type="text" 
                            className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal
                                    border-c_E8EBF1 dark:border-dark_0fc9f2
                                    bg-white dark:bg-transparent
                                    text-black dark:text-dark_0fc9f2"
                            onChange={(event) => {getFNameHandler(event.target.value)}}/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">Last Name
                            {lname === '' &&
                                <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                            }    
                            </div>
                            
                        </div>
                        <input type="text" 
                            className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal
                                    border-c_E8EBF1 dark:border-dark_0fc9f2
                                    bg-white dark:bg-transparent
                                    text-black dark:text-dark_0fc9f2"
                            onChange={(event) => {getLNameHandler(event.target.value)}}/>
                    </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-x-3">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">Username
                            {uname === '' &&
                                <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                            }
                            </div>
                            
                        </div>
                        <input type="text" 
                            className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal
                                    border-c_E8EBF1 dark:border-dark_0fc9f2
                                    bg-white dark:bg-transparent
                                    text-black dark:text-dark_0fc9f2"
                            onChange={(event) => {getUNameHandler(event.target.value)}}/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">Date of birth
                            {birth === '' &&
                                <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                            }
                            </div>
                            
                        </div>
                        <div className="mt-1 relative h-9_5">
                            {/* <input type="date" 
                                className="h-full w-full pl-3 pr-5 border rounded-lg bg-transparent text-xs leading-normal
                                        border-c_E8EBF1 dark:border-dark_0fc9f2
                                        bg-white dark:bg-transparent
                                        text-black dark:text-dark_0fc9f2"
                                onChange={(event) => {getBirthHandler(event.target.value)}}/>
                            <div className="absolute top-0 right-2 h-full flex flex-col">
                                <BsCalendarEvent className="my-auto"/>
                            </div> */}
                            <MyDatePicker input_cn="w-full h-9_5" input_bg_cn="bg-white" picker_pos_cn="right-0 sm:left-0" returnVal={getBirthHandler} datepicker_type="single"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <div className="flex">
                        <div className="relative text-sm leading-normal font-semibold">Email ID
                        {!validateEmail(email) &&
                            <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                        }
                        </div>
                        
                    </div>
                    <input type="text" 
                        className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal
                                border-c_E8EBF1 dark:border-dark_0fc9f2
                                 bg-white dark:bg-transparent
                                text-black dark:text-dark_0fc9f2"
                        onChange={(event) => {getEmailHandler(event.target.value)}}/>
                </div>

                <div className="flex flex-col mt-3">
                    <div className="flex">
                        <div className="relative text-sm leading-normal font-semibold">Password
                        {password === '' &&
                            <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                        }
                        </div>
                        
                    </div>
                    <input type="password" 
                        className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal
                                border-c_E8EBF1 dark:border-dark_0fc9f2
                                 bg-white dark:bg-transparent
                                text-black dark:text-dark_0fc9f2"
                        onChange={(event) => {getPasswordHandler(event.target.value)}}/>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-x-3">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">Select country
                                {/* {country !== '' &&
                                    <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                                } */}
                            </div>
                            
                        </div>
                        <SelectInput 
                            className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal flex items-center
                            border-c_E8EBF1 dark:border-dark_0fc9f2
                            bg-white dark:bg-transparent
                            text-black dark:text-dark_0fc9f2"
                            option_board_class="bg-white dark:bg-gray-900 top-12 z-10"
                            enable_img={true}
                            img_class='w-6 mr-2'
                            option_li={country_li} 
                            default_option={country_li[0]}
                            returnVal={setCountry} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="relative text-sm leading-normal font-semibold">Select Gender
                                {/* {gender !== '' &&
                                    <div className="absolute top-0 -right-3 text-c_C85151 font-semibold">*</div>
                                } */}
                            </div>
                            
                        </div>
                        <SelectInput 
                            className="mt-1 h-9_5 px-3 border rounded-lg bg-transparent text-xs leading-normal flex items-center
                                    border-c_E8EBF1 dark:border-dark_0fc9f2
                                    bg-white dark:bg-transparent
                                    text-black dark:text-dark_0fc9f2"
                                    option_board_class="bg-white dark:bg-gray-900 top-12 z-10"
                                    data_type="gender"
                                    img_class="mr-2 text-c_7EAFE8 dark:text-dark_0fc9f2 text-base"
                                    option_li={gender_li} 
                                    default_option={gender_li[0]}
                                    returnVal={setGender} />
                    </div>
                </div>

                <div className="mt-6 flex font-semibold text-xs leading-normal cursor-pointer">
                    <input type="checkbox" id="terms_checkbox" onChange={(event) => {setEnablePolicy(event.target.checked)}}/>
                    <label className="ml-2" htmlFor="terms_checkbox">I have read and accept the
                        <span className="ml-1 text-c_1564C0 dark:text-dark_0fc9f2 transform hover:scale-105 ease-out duration-700">terms and conditions.</span>
                    </label>
                    
                </div>

                <div className="mt-4 flex cursor-pointer">
                    <input type="checkbox" id="check_box" onChange={(event) => {setEnableCustomPolicy(event.target.checked)}}/>
                    <label htmlFor="check_box" className="ml-2 font-semibold text-xs leading-normal">Lorem ipsum dolor sit amet, consectetur.</label>
                </div>

                <div className="mt-5_5">
                    <button className={`h-9_5 w-full flex items-center justify-center text-xs font-semibold leading-normal rounded-lg
                                    ${disabledSignUpBtn === true ? 'bg-c_E8EBF1 text-c_BCC3CF' : 'transform hover:scale-105 ease-out duration-700 bg-c_1564C0 text-white dark:bg-dark_0fc9f2'}`}>Create an account</button>
                </div>

                <div className="mt-4">
                    <button className="h-9_5 w-full flex items-center justify-center text-xs font-semibold leading-normal rounded-lg
                                    bg-white dark:bg-dark_0fc9f2 text-c_1564C0 dark:text-white shadow-card dark:shadow-none
                                    transform hover:scale-105 ease-out duration-700"
                            onClick={() => {openSignInModalHandler()}}>Aleady have account? Sign In</button>
                </div>
            </div>
            
        </div>
    )
}

export default SignUpModal