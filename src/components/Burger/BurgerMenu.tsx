import './burger.scss'
export default function BurgerMenu({ openBurger, setOpenBurger, setStatus, status }: any) {
	const clickMenuList: React.MouseEventHandler<HTMLUListElement> = () => {
		if (status === 'open') {
			setStatus(status === 'open' ? 'close' : 'open')
			setOpenBurger(openBurger === 'openMenu' ? 'closeMenu' : 'openMenu')
		}
	}

	return (
		<section className={openBurger}>
			<nav>
				{status === 'open' && (
					<ul onClick={clickMenuList} className='nav_list'>
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
				)}
			</nav>
		</section>
	)
}
