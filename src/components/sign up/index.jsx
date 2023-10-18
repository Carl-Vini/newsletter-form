
import image from "./illustration-sign-up-desktop.svg"
import styles from "./SignUp.module.css"





function SignUp({getEmail, submitEmail, validEmail, email}) {
   
     
   
    

    return (
        <div className={styles.container}>
            
                <img src={image} alt="imagem do banner "  className={styles.image}/>
            
            
            <div className={styles.form_container}>
                <h1 className={styles.title}>Stay Updated !</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul className={styles.list}>
                    <li >
                        Product discovering and building what matters
                    </li>
                    <li>
                        Measuring to ensure updates are a success
                    </li>
                    <li>
                        and much more !
                    </li>
                </ul>
                <div className={styles.submit_container}>
                    {
                        validEmail ? <form onSubmit={submitEmail}>
                            <label htmlFor="e-mail">Email address</label>
                            <input type="e-mail" id="e-mail" required onChange={getEmail} value={email} placeholder="youremail@mail.com" />
                            <button type="submit" >Subscribe to monthly newsletter</button>
                        </form> :  
                        <form onSubmit={submitEmail}>
                            <div className={styles.valid_container}>
                            <label htmlFor="e-mail">Email address</label>
                            <label htmlFor="e-mail" className={styles.invalid_mail}>Valid email required</label>
                            </div>
                            <input type="e-mail" id="e-mail" required onChange={getEmail} value={email} placeholder="youremail@mail.com" />
                            <button type="submit" className={styles.submit_button} >Subscribe to monthly newsletter</button>
                        </form>
                    }
                </div>
            </div>         
        </div>
    )
}

export default SignUp;