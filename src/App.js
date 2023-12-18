import { useEffect } from 'react'
import './assets/css/tailwind.css'

import Footer from './components/common/Footer'
import LeftSide from './components/common/LeftSide'
import MainBoard from './components/common/MainBoard'
import { PROXY_URL } from './components/constant'
import apiClient from './utils/api'
import { getIpaddress } from './utils/simplefun'


function App() {
  
  return (
    <div className="App">
      <div className={`flex
                      pt-0 sm:pt-7
                      px-0 sm:px-5 2xl:px-0
                    bg-white dark:bg-black`}>
        <LeftSide className="hidden md:block ml-auto" />
        <MainBoard></MainBoard>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
