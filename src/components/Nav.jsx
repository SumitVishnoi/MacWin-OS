import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="left">
            <div>
                <img src="/nav-icons/apple.svg" alt="apple icon" />
            </div>
            <div>
                <p>Sam</p>
            </div>
            <div>
                <p>File</p>
            </div>
            <div>
                <p>Window</p>
            </div>
            <div>
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div>
                <img src="/nav-icons/wifi.svg" alt="wifi icon" />
            </div>
            <DateTime />
        </div>
    </div>
  )
}

export default Nav