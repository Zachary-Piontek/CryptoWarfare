import styles from './style.module.scss';


export default function Loader() {
    return (
        <div className={styles.Loader}>
            <div className={styles.spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}