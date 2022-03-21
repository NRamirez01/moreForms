import React, { useState } from 'react';

const UserForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [errorLogger, setErrorLogger] = useState({
    //     firstNameLength: "First name must be at least 5 characters",
    //     lastNameLength: "Last name must be at least 5 characters",
    //     passwordLength: "Password must be at least 5 characters",
    //     confirmedPassword: "Passwords must match"
    // });
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [valid, setValid] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const createUser = (e) => {
            e.preventDefault();
            setSubmitted(true);
            const newUser = { firstname, lastname, email, password }
            console.log("Thank you for registering.", newUser);
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setValid('');
    }

    const errorLog = () => {
        let hasErrors = [false,false,false,false,false];
        if(firstname.length < 5 || firstname.length === 0) {
            hasErrors[0] = true;
            
            setFirstNameError('First name must be at least 5 characters');
        } else { setFirstNameError('')}
        if(lastname.length < 5 || lastname.length === 0) {
            hasErrors[1] = true;
            
            setLastNameError('Last name must be at least 5 characters');
        } else {
            setLastNameError('');
        }
        if(email.length < 5 || email.length === 0) {
            hasErrors[2] = true;
            
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
        if(password.length < 5 || password.length === 0) {
            hasErrors[3] = true;
            setPasswordError('Password must be at least 5 characters');
        } else {
            setPasswordError('')
        }
        console.log(hasErrors.every(element => element === false));
        if( confirmPassword !== password || confirmPassword.length < 5) {
            hasErrors[4] = true;
            setConfirmError('Passwords must match');
        } else {
            setConfirmError('');
        }
        hasErrors.every(element => element === false) ? 
            setValid(true):
            setValid(false);
    }

    return (
        <form onMouseUp={errorLog} onKeyUp={errorLog} onSubmit={createUser}>
            {  
                submitted === true ?
                <h1>Thanks for registering.</h1>:
                <h1>Welcome to the form.</h1>
            }
            <p>{firstNameError} </p>
            <p>{lastNameError}</p>
            <p>{emailError}</p>
            <p>{passwordError}</p>
            <p>{confirmError}</p>
            <div>
                <label>First name: </label>
                <input type="text" value={firstname} onMouseOut={errorLog} onKeyDown={errorLog} onInput={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" value={lastname} onMouseOut={errorLog} onKeyDown={errorLog} onInput= { (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onMouseOut={errorLog} onKeyDown={errorLog} onInput={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onMouseOut={errorLog} onKeyDown={errorLog} onInput={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm password: </label>
                <input type="password" value={confirmPassword} onMouseOut={errorLog} onKeyDown={errorLog} onInput= { (e) => setConfirmPassword(e.target.value) } />
            </div>
            
        { ! valid ? 
            <input type="submit" value="Register" disabled/>:
            <input type="submit" value="Register"/>
        }
        </form>
    )
}

export default UserForm;