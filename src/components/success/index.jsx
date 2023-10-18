import styles from "./success.module.css"
import icon from "./icon-success.svg"


function Success({email}) {
    return (
        <div className={styles.success_container} >
            <img src={icon} className={styles.icon} alt="icon for success icon" width={60}/>
            <h1 className={styles.title}>Thanks for subscribing!</h1>
            <p className={styles.text}>A confirmation email has been sent to your email. Please open it and click the button inside to confirm your subscription.</p>
            <button className={styles.success_button}>Dismiss message</button>
        </div>
    )
}


export default Success;