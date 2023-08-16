import { useState } from 'react'
import Logo from '../../assets/icons/Logo57.svg'
import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import Burger from '../Burger/Burger'
import BurgerMenu from '../Burger/BurgerMenu'
import Button from '../Button/Button'
import s from './header.module.scss'
export default function Header() {
	const [openBurger, setOpenBurger] = useState('closeMenu')
	const [status, setStatus] = useState('close')

	return (
		<header className={s.header}>
			<Wrapper>
				<div className={s.header_container}>
					<a href='#/'>
						<img src={Logo}></img>
					</a>
					<nav>
						<ul className={s.nav_list}>
							<li>
								<a href='#description'>Бригада</a>
							</li>
							<li>
								<a href='#history'>Історія</a>
							</li>
							<li>
								<a href='#mission'>Місія</a>
							</li>
						</ul>
					</nav>
					<div className={s.button}>
						<Button />
					</div>
					<div className={s.burger}>
						<Burger
							status={status}
							setStatus={setStatus}
							openBurger={openBurger}
							setOpenBurger={setOpenBurger}
						/>
					</div>

					<BurgerMenu
						status={status}
						setStatus={setStatus}
						setOpenBurger={setOpenBurger}
						openBurger={openBurger}
					/>
				</div>
			</Wrapper>
		</header>
	)
}
