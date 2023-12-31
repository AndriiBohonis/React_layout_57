import { ReactNode } from 'react'
import s from './Wrapper.module.scss'
export const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.content}>{children}</div>
		</div>
	)
}
