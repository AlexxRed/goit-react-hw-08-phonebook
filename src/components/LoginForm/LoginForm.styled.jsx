import styled from '@emotion/styled';

export const Box = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 200px;
    max-width: 380px;
    background-color: #1c6880;
    border-radius: 15px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const FormTitle = styled.h3`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

export const Form = styled.form`
    display: block;
    width: 320px;
    /* height: 300px; */
`;

export const LableForm = styled.label`
    
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px,
`;

export const InputForm = styled.input`
    
    display: flex;
    padding: 10px;
    flex-direction: column;
    margin-bottom: 12px;
    border-radius: 5px;
`;

export const FormButton = styled.button`
    padding: 10px;
    border-radius: 5px;
    
`;
