import React from 'react'

// Components
import RightBar from './components/RightBar/RightBar'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import TopBar from './components/TopBar/TopBar'
const Home = () => {
  return (
      <>
          <TopBar />
          <div className='home__container'>
              <Sidebar />
              <Feed />
              <RightBar />
          </div>
    </>
  )
}

export default Home