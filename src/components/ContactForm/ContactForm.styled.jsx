
import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import {Button} from '@mui/material';

export const MainForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  padding: 20px 20px 20px 20px;
  border-radius: 10px; 
  border: 2px dotted #2778a7;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const InputForm = styled(Field)`
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #868d79;
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

