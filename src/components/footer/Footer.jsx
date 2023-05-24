import React from 'react';

import { styled } from 'styled-components';
import { ImgLogo } from '../exports';

export const Wrapper = styled.footer `
    background-color: ${(props) => props.theme.colors.dark};
    width: 100%;
    padding: 32px 0;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;


export const Logo = styled.img `
    border-radius: 20px;
    margin: auto;    
`;

export const Copy = styled.p `
    color: ${(props) => props.theme.colors.background};
    font-size: 16px;
`;



function Footer() {
  return (
    <Wrapper>
        <Logo src={ImgLogo} />
        <Copy>Copyright© Dispenser</Copy>
    </Wrapper>
  )
}

export default Footer;