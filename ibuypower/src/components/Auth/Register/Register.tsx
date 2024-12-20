import '../auth.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import backgroundImg from '../../../assets/login-register-Background.jpg';
import { registerYupSchema } from '../../../yupSchemas/registerYupSchema';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebase';
import { Loading } from '../../../shared/Loading/Loading';

import * as PATHS from '../../../shared/paths';

export const Register: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { handleSubmit, values, errors, touched, setTouched, setFieldValue, validateField, validateForm } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: registerYupSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (formValues) => {
            setIsLoading(true);

            createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
                .then((userCredential) => {
                    // const user = 
                    userCredential.user;

                    setIsLoading(false);

                    toast.success('Account created!');

                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    
                    if (error.code == 'auth/email-already-in-use') {
                        toast.warn('Email is already used. Try to log in.');
                        setIsLoading(false);
                        return;
                    }
                    setIsLoading(false);

                    toast.error(error.message);
                });
        }
    });

    // Custom handleSubmit to validate the form before submitting
    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            password: true,
        });

        const errors = await validateForm(); // Manually validate the form

        if (Object.keys(errors).length === 0) {
            handleSubmit(e); // Submit the form if no errors
        }
    };

    // Handle field change to manually validate the specific field
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFieldValue(id, value);
        validateField(id); // Validate the specific field
    };

    return (
        <div className="auth-register">

            {isLoading && <Loading />}

            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-register-form' onSubmit={onSubmitForm}>
                <h2 className="auth-title">Create Account</h2>

                <div className="input-fields">
                    <input
                        id='firstName'
                        type="text"
                        placeholder='First Name'
                        className={`auth-field ${touched.firstName && errors.firstName ? 'error' : ''}`}
                        onChange={handleFieldChange}
                        value={values.firstName}
                    />
                    {touched.firstName && errors.firstName ? (
                        <div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.firstName}.</p>
                        </div>
                    ) : null}
                    <input
                        id='lastName'
                        type="text"
                        placeholder='Last Name'
                        className={`auth-field ${touched.lastName && errors.lastName ? 'error' : ''}`}
                        onChange={handleFieldChange}
                        value={values.lastName}
                    />
                    {touched.lastName && errors.lastName ? (
                        <div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.lastName}.</p>
                        </div>
                    ) : null}
                    <input
                        id='email'
                        type="email"
                        placeholder='Email'
                        className={`auth-field ${touched.email && errors.email ? 'error' : ''}`}
                        onChange={handleFieldChange}
                        value={values.email}
                    />
                    {touched.email && errors.email ? (
                        <div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.email}.</p>
                        </div>
                    ) : null}
                    <input
                        id='password'
                        type="password"
                        placeholder='Password'
                        className={`auth-field ${touched.password && errors.password ? 'error' : ''}`}
                        onChange={handleFieldChange}
                        value={values.password}
                    />
                    {touched.password && errors.password ? (
                        <div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.password}.</p>
                        </div>
                    ) : null}

                    <p className="sign-in"><Link to={PATHS.LOGIN} className='register-sign-in-link'>Already have an Account?</Link></p>

                    <button className="auth-create-btn" type='submit'>Create</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};
