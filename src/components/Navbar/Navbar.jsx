import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


export const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <header className={styles.navbar}>
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <a href='/'>HOME</a>
                </li>
                <li>
                    <a href='/meet'>MEET ASHLEY</a>
                </li>
                <li>
                    <a href='/portfolio'>PORTFOLIO</a>
                </li>
                <li>
                    <a href='/schedule'>SCHEDULE A SESSION</a>
                </li>
                <li>
                    <a href='/price'>PRICING</a>
                </li>
            </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            
            
        </div>
    </header>
  )
}
