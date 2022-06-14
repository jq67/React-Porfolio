import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const styles = {
    footHeight: {
      height: '100px',
    },

  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setErrorMessage('')
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  const blur = (e) => {
    e.preventDefault();
    console.log('worked?')
    if ( e.target.value === '') {
      setErrorMessage('Field must not be empty')
    }

  }

  return (
    <div className="w-50 mx-auto mt-3">
      <form className="form">
        <label className="anybody">
          Name
        </label>
        <input
          value={userName}
          name="userName"
          onBlur={blur}
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          className="mb-4"
        />
        <label className="anybody">
          Email
        </label>
        <input
          value={email}
          onBlur={blur}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className="mb-4"
        />
        <label className="anybody">
          Message
        </label>
        <textarea
          className="form-control mb-4"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={blur}
          type="textarea"
          placeholder="hope this works"
          rows="4"
        />
        <button className="anybody" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div style={styles.footHeight}></div>
    </div>
  );
}

export default Form;
