import Block from './components/Block/Block'
import Block2 from './components/Block2/Block2'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles['container']}>
            <Block />
            <Block2 />
        </div>
    )
}

export default App
