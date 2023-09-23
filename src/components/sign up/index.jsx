import { useState } from "react";
import image from "./illustration-sign-up-desktop.svg"
import styles from "./SignUp.module.css"
import validator from "validator";




function SignUp() {
    const [validEmail, setValidEmail] = useState(true);
    const [email, setEmail] = useState('');
    

    const getEmail = (event) => {

        setEmail(event.target.value);

        const isValid = validator.isEmail(event.target.value);
        setValidEmail(isValid);
    }

    const submitEmail = (event) => {
        event.preventDefault();
        console.log(email);

        const listEmail = []

        const isValid = validator.isEmail(email)
        console.log(isValid)
        if (isValid) {
            setValidEmail(true)
            listEmail.push(email);
        } else {
            setValidEmail(false)
        }

        
        console.log(listEmail);
    }

     
   
    

    return (
        <div className={styles.container}>
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
            <img src={image} alt="" width={300} />
                    
        </div>
    )
}

export default SignUp;