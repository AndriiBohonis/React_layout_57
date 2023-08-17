import { useState } from 'react'
import './burger.scss'

const BurgerMenu = () => {
	const [status, setStatus] = useState('close')
	const [viewMenu, setViewMenu] = useState('closeMenu')

	const handelBurgerClick = () => {
		setStatus(status === 'open' ? 'close' : 'open')
		setViewMenu(viewMenu === 'openMenu' ? 'closeMenu' : 'openMenu')
	}

	return (
		<>
			<div className='BurgerMenu__container' role='button' onClick={handelBurgerClick}>
				<i className={status}></i>
				<i className={status}></i>
				<i className={status}></i>
			</div>
			{viewMenu === 'openMenu' && (
				<section onClick={handelBurgerClick} className='burgerWrap'>
					<nav onClick={(e) => e.stopPropagation()} className={viewMenu}>
						<ul onClick={handelBurgerClick} className='nav_list'>
							<li className='li'>
								<a href='#description'>Бригада</a>
							</li>
							<li className='li'>
								<a href='#history'>Історія</a>
							</li>
							<li className='li'>
								<a href='#mission'>Місія</a>
							</li>
						</ul>
					</nav>
				</section>
			)}
		</>
	)
}

export default BurgerMenu
