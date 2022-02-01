import React, { useState } from 'react';
import styled from 'styled-components';

import background from '../images/pic02.jpeg';

const FormWrapper = styled.div`
    background: no-repeat url(${background});
    opacity: 0.8;
    background-size: cover;
    height: 100vh;
    font-family: helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormStyled = styled.div`
    background-color: #fff;
    height: 50vh;
    weight: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    border-radius: 15px;
    padding: 0 20px;
`


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('token', 'Signed in');
    }

    return (
        <>
            <h1>Login</h1>
            <FormWrapper>
                <FormStyled>
                    <form onSubmit={handleSubmit}>
                        <label> Username:
                        <input
                            type='text'
                            name='username'
                            value={user.username}
                            onChange={handleChange} 
                        />
                        </label>

                        <label>Password:
                        <input
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={handleChange}    
                        />
                        </label>
                        <button>Log In</button>
                    </form>
                </FormStyled>
            </FormWrapper>
        </>
    )
}

export default Login;