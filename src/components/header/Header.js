import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import { GoListOrdered } from 'react-icons/go'
import { useState } from 'react'


const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu((showMenu) =>!ShowMenu)
  }
  return (
     <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt='' />
        <span>Amazon</span>
      </div>

      <div className={css.right}>

      <div className={css.bars} onClick={toggleMenu}>
        <GoListOrdered/>
      </div>

        <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none'}}>
          <li>Collection</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" placeholder='search' className={css.search}/>

        <CgShoppingBag className={css.cart}/>
      </div>
     </div>
  )
}

export default Header;