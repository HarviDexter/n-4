import React from 'react'
import logo from '../../img/Logo.png'
import styles from './Header.module.css'
const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.nav}>
				<a href='../../../public/index.html'>
					<img src={logo} className={styles.logo} />
				</a>
				<a className={styles.links} href='/'>
					Наши проекты
				</a>
				<a className={styles.links} href='/'>
					О нас
				</a>
				<a className={styles.links} href='/'>
					Наши сотрудники
				</a>
				<a className={styles.links} href='/'>
					Контакты
				</a>
			</div>
			<div className={styles.buttons}>
				<button className={styles.signup}>Войти</button>
				<button className={styles.login}>Зарегистрироваться </button>
			</div>
		</div>
	)
}

export default Header
