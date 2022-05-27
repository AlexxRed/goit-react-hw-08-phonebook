import { useState } from 'react';
import { LableForm, Box, Form, FormTitle, InputForm, FormButton } from "./RegisterForm.styled";
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

export default function RegisterPage() {
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
        case 'name':
            return setName(value);
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
        // dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Box>
        <FormTitle>Please register to use the phonebook.</FormTitle>

        <Form onSubmit={handleSubmit}  autoComplete="on">
            <LableForm >
            Name
            <InputForm type="text" name="name" value={name} onChange={handleChange} />
            </LableForm>

            <LableForm >
            Email
            <InputForm
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            </LableForm>

            <LableForm >
            Password
            <InputForm
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            </LableForm>

            <FormButton type="submit">Registration</FormButton>
        </Form>
        </Box>
    );
}