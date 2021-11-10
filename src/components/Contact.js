import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { validateEmail } from '../utils/helper';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = document.querySelector('#email-form')
        const formData = Object.fromEntries(new FormData(form).entries());
        console.log(formData);
    }

    return (
        <FadeIn className='content'>
            <h2 className='font-size-24 font-weight-bold border-bottom'>Contact Me</h2>
            <div className='d-flex flex-column justify-content-between'>
                <div className='d-flex flex-column justify-content-between'>
                    <p className='d-flex align-items-start mt-0'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>
                            <i className='fa-brands fa-github mr-5'></i>
                            <span>Github</span>
                        </span>
                        <a href='https://github.com/ZachYarbrough' target='_'>
                            <span className='mr-5 link text-break'>https://github.com/ZachYarbrough</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start mt-0'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>
                            <i className='fa-brands fa-linkedin mr-5'></i>
                            <span>LinkedIn</span>
                        </span>
                        <a href='https://www.linkedin.com/in/zachary-yarbrough-7518351a2' target='_'>
                            <span className='mr-5 link text-break'>https://www.linkedin.com/in/zachary-yarbrough-7518351a2/</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                    <p className='d-flex align-items-start mt-0'>
                        <span className='alert alert-primary mr-5 py-0 px-5'>
                            <i className='far fa-envelope mr-5'></i>
                            <span>Email</span>
                        </span>
                        <a href='mailto:zachyarbro@gmail.com' target='_'>
                            <span className='mr-5 link text-break'>zachyarbro@gmail.com</span>
                            <i className='fa fa-external-link-alt' aria-hidden="true"></i>
                        </a>
                    </p>
                </div>
                <form id='email-form' className='card' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type="text" defaultValue={name} name="Name" placeholder='name' className="form-control" required="required" onBlur={handleChange} />
                    </div>
                    <div className='form-group'>
                        <input type="email" defaultValue={email} name="Email" placeholder='email address' className="form-control" required="required" onBlur={handleChange} />
                    </div>
                    <div className='form-group'>
                        <textarea rows="5" defaultValue={message} name="Message" placeholder='message' className="form-control" required="required" onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="required">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn btn-primary" type="submit" data-testid="buttonTag">Submit</button>
                </form>
            </div>
        </FadeIn>
    );
}

export default Contact;