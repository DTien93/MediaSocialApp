import React, { useContext, useRef, useState } from 'react'

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

import '../Share/share.scss'

import { AuthContext } from '../../context/AuthContext'

import axios from 'axios'

const Share = () => {
    const { user } = useContext(AuthContext)
    const PF = '/assets/'
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandle = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData()
        }
        try {
          await axios.post('/posts', newPost)
        } catch (error) {
            console.log(error)
        }
    }

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
                        placeholder={"What's is your mind " + user.username + "?"}
                        className='share__input'
                        ref={desc}
                    />
                </div>
                <hr className='shareHr' />
                <form className='share__bottom' onSubmit={submitHandle}>
                <div className='share__options'>
                  <label htmlFor='file' className='share__option'>
                    <PermMedia htmlColor='tomato' className='share__icon' />
                            <span className='share__option-text'>Photo of video</span>
                            <input
                                style={{display: 'none'}}
                                type='file' id='file'
                                accept='.png,.jpeg,.jpg'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                    </label>
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
                </form>          
            </div>
        </div>
    )
}

export default Share

