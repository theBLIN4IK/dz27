import styles from './List.module.css'

function List() {
	return (
		<ul className={styles['list']}>
			<li className={styles['li1']}>1. Элемент списка</li>
			<li className={styles['li2']}>2. Элемент списка</li>
			<li className={styles['li3']}>3. Элемент списка</li>
		</ul>
	)
}

export default List
