import { Greetings } from '../../components/Greetings/Greetings';
import { Link } from "react-router-dom";
import { refs } from "../../services/refs";

function HomePage(){
    return (
        <>
            <Greetings />
            <Link to={refs.loginPage}>Please go to login</Link>
            <p>If you don't have an account</p>
            <Link to={refs.registerPage}>Please go to Register</Link>
        </>
    )
};

export default HomePage;
