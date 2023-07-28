import styles from './Card.module.css'


const Card = (props) => {
    return (
        <>
        {props.children}
        <hr className={styles.hr}></hr>
        </>
    )
}

export default Card