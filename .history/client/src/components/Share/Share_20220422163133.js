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
                        <span className='share__option-text'>Photo of video</span>
                    </div>
                    <div className='share__option'>
                        <Label htmlColor='blue' className='share__icon' />
                        <span className='share__option-text'>Tag</span>
                    </div>
                    <div className='share__option'>
                        <Room htmlColor='green' className='share__icon' />
                        <span className='share__option-text'>Location</span>
                    </div>
                    <div className='share__option'>
                        <EmojiEmotions htmlColor='goldenrod' className='share__icon' />
                        <span className='share__option-text'>Photo of video</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share

