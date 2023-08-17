import { useState } from 'react'
import Logo from '../../assets/icons/Logo57.svg'
import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import Burger from '../Burger/Burger'
import Button from '../Button/Button'
import s from './header.module.scss'
export default function Header() {
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
						<Burger />

						{/* <BurgerMenu viewMenu={viewMenu} setViewMenu={setViewMenu} status={status} setStatus={setStatus}/> */}
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
