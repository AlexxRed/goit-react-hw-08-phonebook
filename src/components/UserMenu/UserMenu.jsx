
import { useDispatch, useSelector } from 'react-redux';
import  authOperations  from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import {Button} from '@mui/material';
// import defaultAvatar from './default-avatar.png';

const styles = {
    container: { 
    display: 'flex',
    alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
        {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
        <span style={styles.name}>Welcome, {name}</span>
        <Button variant="contained" type="button" onClick={() => dispatch(authOperations.logOut())}>
            Exit
        </Button>
        </div>
    );
}