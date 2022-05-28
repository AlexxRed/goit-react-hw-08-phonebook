import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import  authSelectors  from '../../redux/auth/authSelectors';

export default function PublicRoute({ children, restricted = false }) {
    const isLogin = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLogin && restricted;
    return shouldRedirect ? <Navigate to={'/contacts'} /> : children;
};

