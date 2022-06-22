import React from 'react'

import '../RightBar/rightbar.scss'

import { Users } from '../../dummyData'
import Online from '../Online/Online'

const RightBar = ({profile}) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthday__container'>
          <img className='birthday__img' src='assets/gift.png' alt='' />
          <span>
            
          </span>
        </div>
      </>
    )
  }
}

export default RightBar