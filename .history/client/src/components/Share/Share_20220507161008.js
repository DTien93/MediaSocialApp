import React, { useContext } from 'react'

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

import '../Share/share.scss'

import { AuthContext } from '../../context/AuthContext'

const Share = () => {
    const { user } = useContext(AuthContext)
    const PF = '/assets/'
    return (
        <div className='share'>
            <div className='share__wrapper'>
                <div className='share__top'>
                    <img
                        src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
                        alt='imgSharePhoto'
                        className='share__profileImg'
                    />
                    <input
                        placeholder={"What's is your mind  " + user.username}
                        className='share__input'
                    />
                </div>
                <hr className='shareHr' />
                <div className='share__bottom'>
                <div className='share__options'>
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
        </div>
    )
}

export default Share

