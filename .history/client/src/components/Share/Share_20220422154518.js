import React from 'react'

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

const Share = () => {
    return (
        <div className='share'>
            <div className='share__wrapper'>
                <div className='share__top'>
                    <img
                        src=''
                        alt=''
                        className='share__profileImg'
                    />
                </div>
                <hr className='shareHr' />
                <div className='share__bottom'>
                    <div className='share__option'>
                        <PermMedia htmlColor='tomato' className='share__icon' />
                        <span className='share__option-text'>
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share

