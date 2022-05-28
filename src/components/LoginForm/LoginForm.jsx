import { useState } from 'react';
import { LableForm, Box, Form, FormTitle, InputForm, FormButton  } from "./LoginForm.styled";

// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';



export default function LoginForm() {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <Box>
        <FormTitle>Please enter your name and password</FormTitle>

        <Form onSubmit={handleSubmit}  autoComplete="off">
            <LableForm >
            Email
            <InputForm
                type="email"
                name="email"
                placeholder="your email"
                value={email}
                onChange={handleChange}
            />
            </LableForm>

            <LableForm >
            Password
            <InputForm
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleChange}
            />
            </LableForm>

            <FormButton type="submit">Login</FormButton>
        </Form>
        </Box>
    );
}