import { useState } from "react";
import SignUp from "./components/sign up";
import Success from "./components/success";
import validator from "validator";

function App() {

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
     <SignUp getEmail={getEmail} submitEmail={submitEmail} validEmail={validEmail} email={email}/>
    // <Success />
  );
}

export default App;
