import React from 'react'
import './App.css'
import profilePic from '../propic.jpg'

export default function About() {
    return (
        <div className='aboutpage'>
            <h2 className='section-title'>ABOUT ME</h2>
            <div className='photo-holder'>
                <img src={profilePic} alt='Profile Portrait' className='profile-picture'></img>
            </div>
            <div className='biography'>
                <p className='descript-text'>For the duration on my working career I've been a 
                    Jack-Of-All-Trades going from a salesman to a caregiver.
                     Recently I stumbled upon the world of coding and instantly
                      fell in love! I am a Web Developer and graduated from
                       DevMountain.</p>
            </div>
            <h2 className='secondary-title'>Skills</h2>
        </div>
    )
}