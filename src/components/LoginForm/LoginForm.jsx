import { useState } from 'react';
import { InputForm, Box, Form } from "./LoginForm.styled";

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
        <h2>Please enter your name and password</h2>

        <Form onSubmit={handleSubmit}  autoComplete="off">
            <InputForm >
            Почта
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            </InputForm>

            <InputForm >
            Пароль
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            </InputForm>

            <button type="submit">Войти</button>
        </Form>
        </Box>
    );
}