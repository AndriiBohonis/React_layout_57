import './burger.scss'
export default function BurgerMenu({ openBurger, setOpenBurger, setStatus, status }: any) {
	const clickMenuList = () => {
		setStatus(status === 'open' ? 'close' : 'open')
		setOpenBurger(openBurger === 'openMenu' ? 'closeMenu' : 'openMenu')
	}
	return (
		<section className={openBurger}>
			<nav>
				<ul onClick={clickMenuList} className='nav_list'>
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
		</section>
	)
}
