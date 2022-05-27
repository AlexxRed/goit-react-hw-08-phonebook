import styled from '@emotion/styled';
import {  keyframes } from '@emotion/react'
import { NavLink } from 'react-router-dom';

export const Logo = styled.div`
  overflow: hidden;
  height: 24px;
  width: 24px; 
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #5d4cc2;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const filmReel  = keyframes`
  0% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(-29px);
  }
`;


export const LogoIcon = styled.div`
  animation: ${filmReel} 1s linear infinite;
  
`;

