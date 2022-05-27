import { Link, Header, Logo, Navigation, LogoIcon, Box } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/long-film.png'
import { refs } from "../../services/refs";

export  function AppBar() {
    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.layout}><Logo>
                    <LogoIcon src={logo} alt="logo" />
                    </Logo></NavLink>
                    <Link to={refs.layout}>Home</Link>
                    <Link to={refs.contactsPage}>Contacts</Link>
                </Box>
                <Box>
                    <Link to={refs.loginPage}>Login</Link>
                    <Link to={refs.registerPage}>Registration</Link>
                </Box>
            </Navigation>
        </Header>
    )
};