import React from 'react'
import { Link } from 'react-router-dom'
const links = [
    { to: 'Starred', text: 'starred' },
    { to: '/', text: 'home page' }
]
const Navs = () => {
    return (
        <div>
            <ul>
                {
                    links.map(item =>
                        <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
                    )
                }
            </ul>
        </div>
    )
}

export default Navs
