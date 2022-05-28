import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import  authSelectors  from '../../redux/auth/authSelectors';

export default function PublicRoute({ children }) {
    const isLogin = useSelector(authSelectors.getIsLoggedIn);
    return !isLogin ? children : <Navigate to="/contacts" />;
};

