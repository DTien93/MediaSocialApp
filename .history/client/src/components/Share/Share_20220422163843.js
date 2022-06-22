import React from 'react'

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

import '../Share/share.scss'

const Share = () => {
    return (
        <div className='share'>
            <div className='share__wrapper'>
                <div className='share__top'>
                    <img
                        src='/assets/person/1.jpeg'
                        alt='imgSharePhoto'
                        className='share__profileImg'
                    />
                    <input
                        placeholder='What is your min Henry ?'
                        className='share__input'
                    />
                </div>
                <hr className='shareHr' />
                <div className='share__bottom'>
                <div className='share__options'>
                        
                </div>
                </div>
                <button className='share__button'>Share</button>
            </div>
        </div>
    )
}

export default Share

