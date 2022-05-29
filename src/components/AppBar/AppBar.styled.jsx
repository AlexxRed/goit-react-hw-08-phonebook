import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Logo = styled(LocalPhoneIcon)`
  display: block;
  text-align: center;
  padding: 6px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  fill: #1565c0;
  &:hover,
  &:focus {
        fill: #23c015;
    }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #a82993;
  }
`;

export const Header = styled.header`
  display: block;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

