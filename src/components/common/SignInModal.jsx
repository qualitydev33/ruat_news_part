
import { useEffect, useState } from 'react'
import {
    BsX
} from '../icon/IconImage'
import { validateEmail } from '../../utils/simplefun'

const SignInModal = ({cancelSignInModalHandler, openSignUpModalHandler}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [disableLoginBtn, setDisableLoginBtn] = useState(true)

    const getEmailHandler = (str) => {
        setEmail(str)
    }

    const getPasswordHandler = (str) => {
        setPassword(str)
    }

    useEffect(() => {
        if (validateEmail(email) && password !== '') {
            setDisableLoginBtn(false)
        }else {
            setDisableLoginBtn(true)
        }
    }, [email, password])

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                        px-3 sm:px-0">
            <div className="m-auto w-full max-w-430px pt-7_5 pb-10 px-8 rounded-md
                            bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card">
                <div className="flex items-center">
                    <div className="text-28px font-semibold">Sign In</div>
                    <BsX className="text-c_BCC3CF text-3xl ml-auto cursor-pointer"
                        onClick={() => {cancelSignInModalHandler()}}/>
                </div>
                <div className="mt-2 text-c_6E7582 text-xs leading-normal">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</div>
                <div className="flex flex-col mt-15">
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

                <div className="flex flex-col mt-4_5">
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

                <div className="mt-5_5">
                    <button className={`h-9_5 w-full flex items-center justify-center text-xs font-semibold leading-normal rounded-lg 
                                    
                                    ${disableLoginBtn === false ? 'transform hover:scale-105 ease-out duration-700 bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-c_E8EBF1 text-c_BCC3CF'}`}
                            disabled={disableLoginBtn}>Log In</button>
                </div>

                <div className="mt-4">
                    <button className="h-9_5 w-full flex items-center justify-center text-xs font-semibold leading-normal rounded-lg
                                    bg-white dark:bg-dark_0fc9f2 text-c_1564C0 dark:text-white shadow-card dark:shadow-none
                                    transform hover:scale-105 ease-out duration-700"
                            onClick={() => {openSignUpModalHandler()}}>New to Altsome? Create an account</button>
                </div>
            </div>
            
        </div>
    )
}

export default SignInModal