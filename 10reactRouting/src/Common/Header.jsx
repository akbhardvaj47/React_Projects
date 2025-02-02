import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <h1>This is Header Part</h1>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about-us'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/course'}>Course</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header