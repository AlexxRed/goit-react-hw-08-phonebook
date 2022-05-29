import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 450px;
    padding-left: 0px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    background-color: #8080809d;

`;

export const ContactBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 300px;
    padding: 15px;
`;

export const ContactAvatar = styled(ContactPhoneIcon)`
    display: block;
    align-items: center;
    fill: #1565c0;
    width: 40px;
    height: 40px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    border-bottom: 1px dotted #2778a7;
    margin-bottom: 10px;
    /* &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #1565c0;
        margin-right: 15px;
        margin-left: 30px;
    } */
`;

export const ButtonDelete = styled(DeleteIcon)`
    cursor: pointer;
    margin-left: 15px;
    border-radius: 3px;
    padding: 5px 5px;
    background-color: #133a66;
    color: white;
    font-weight: 500;
    &:hover,
    &:focus {
        background-color: #bb4d1a;
    }
`;

export const ContactName = styled.span`
    display:block;
    width: 300px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
`;

export const ContactNumber = styled.a`
    display:block;
    width: 300px;
    color: #000000;
`;