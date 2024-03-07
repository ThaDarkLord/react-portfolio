import { validateEmail } from '../../utils.js/helper';
import '../assets/styles/contact.css'
import { useState } from 'react';
export default function Form(){
const [userName , setuserName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (event)  =>{
  console.log(event)
  const { target } = event;
const name = event.target.name;
const value = event.target.value;

if (name === 'Name') {
  setuserName(value)
} else if (name === 'Email') {
  setEmail(value)
} else {
  setMessage(value)
}
}


const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setErrorMessage(
        `Please enter a name`
      )
    } else if (!validateEmail(email)){
      setErrorMessage(` Please provide a valid email to continue!`)
      return;
    }else if (!message){
      setErrorMessage(`A message must be provided to continue`)
      return;
    }

    setuserName('');
    setEmail('');
    setMessage('');

    return
}
    return(
      <div className="container text-center">
      <h2>
        Contact me
      </h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="name1"
          onChange={handleInputChange}
          type="text"
          placeholder="First and Last name please!"
        />
        <input
          value={email}
          name="mail"
          onChange={handleInputChange}
          type="email"
          placeholder="Input your email here"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="What would you like to say ?"
        />
        <button type="submit">
          Submit
        </button>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
    </div>
    )
}

