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
                        <span className='share__option-text'>Feeling</span>
                    </div>
                </div>
                <button className='share__button'>Share</button>
            </div>
        </div>
    )
}

export default Share

