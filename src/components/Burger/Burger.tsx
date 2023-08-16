import { useState } from 'react'
import './burger.scss'

const BurgerMenu = ({ setOpenBurger, openBurger, setStatus, status }: any) => {
	const handelBurgerClick = () => {
		setStatus(status === 'open' ? 'close' : 'open')
		setOpenBurger(openBurger === 'openMenu' ? 'closeMenu' : 'openMenu')
	}
	return (
		<div className='BurgerMenu__container' role='button' onClick={handelBurgerClick}>
			<i className={status}></i>
			<i className={status}></i>
			<i className={status}></i>
		</div>
	)
}

export default BurgerMenu
