import { useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/authSelectors';

export default function PrivateRoute({children}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <>
            {isLoggedIn ?? children}
        </>
    );
};