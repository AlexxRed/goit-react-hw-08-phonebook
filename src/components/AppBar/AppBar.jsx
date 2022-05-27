import { Link, Header, Logo, Navigation, LogoIcon } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/long-film.png'
import { refs } from "../../services/refs";

export  function AppBar() {
    return (
        <Header>
            <Navigation>
                <NavLink to={refs.layout}><Logo>
                    <LogoIcon src={logo} alt="logo" />
                </Logo></NavLink>
                <Link to={refs.layout}>Home</Link>
                <Link to={refs.contactsPage}>Contacts</Link>
                <Link to={refs.loginPage}>Login</Link>
                <Link to={refs.registerPage}>Registration</Link>
            </Navigation>
        </Header>
    )
};