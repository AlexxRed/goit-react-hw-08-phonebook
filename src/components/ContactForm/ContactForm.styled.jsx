
import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import {Button} from '@mui/material';

export const MainForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 20px 20px 20px 20px;
  border-radius: 10px; 
  border: 3px dotted #2778a7;
  background-color: #8080809d
`;

export const Label = styled.label`
  width: 300px;
  font-size: 18px;
`;

export const InputForm = styled(Field)`
width: 270px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #3a7179ab;
`;

export const ButtonAdd = styled(Button)`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 5px;
  background-color: #1565c0;
  color: white;
  font-weight: 500;
  &:hover,
  &:focus {
    background-color: #23647e;
  }
`;

