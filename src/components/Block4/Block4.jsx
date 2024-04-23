import styles from './Block4.module.css'
import Block5 from '../Block5/Block5'
import Block6 from '../Block6/Block6'
import Block7 from '../Block7/Block7'	

function Block4() {
	return <div className={styles['container']}>
          <Block5 />
		  <Block6 />
		  <Block7 />
	</div>
}

export default Block4
