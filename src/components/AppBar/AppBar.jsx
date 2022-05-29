import { Link, Header, Navigation, Box, Logo} from './AppBar.styled';//Logo,LogoIcon 
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { refs } from "../../services/refs";
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors'

export function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)


    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.contactsPage}><Logo></Logo></NavLink>
                    <Link to={refs.layout}>Home</Link>
                    <Link to={refs.contactsPage}>Contacts</Link>
                </Box>
                {isLoggedIn ?
                    <Box>
                    <UserMenu></UserMenu>
                </Box>
                        :
                <Box>
                    <Link to={refs.loginPage}>Login</Link>
                    <Link to={refs.registerPage}>Registration</Link>
                </Box>
                    
                }
                
            </Navigation>
        </Header>
    )
};