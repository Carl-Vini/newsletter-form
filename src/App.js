import { useState } from "react";
import SignUp from "./components/sign up";
import Success from "./components/success";
import validator from "validator";
import emaijs from "@emailjs/browser";

function App() {

    const [validEmail, setValidEmail] = useState(true);
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const templatePrams = {
        message: "https://portfolio-pessoal-three.vercel.app", 
        mail: email,
        from_name: "Carlos Vinícius"
    }

    const getEmail = (event) => {

        setEmail(event.target.value);


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
            setSuccess(true)
            emaijs.send("service_1v4v6k8","template_e63083w",templatePrams, "kgot18dzmhsQQTbjX")
            .then((response) => {
                console.log("email enviado", response.status, response.text)
            }, (error) => {
                console.log("failed to send email", error)
            })
        } else {
            setValidEmail(false)
            setSuccess(false)
        }


        console.log(listEmail);
    }


    return (
      <>
        {
            success ? <Success /> : <SignUp getEmail={getEmail} submitEmail={submitEmail} validEmail={validEmail} email={email} />
}
</>
    //  <SignUp getEmail={getEmail} submitEmail={submitEmail} validEmail={validEmail} email={email}/>
    // <Success />
  );
}

export default App;
