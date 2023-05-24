import React from 'react';

import { styled } from 'styled-components';

export const Wrapper = styled.section `
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 48px;
`;

export const Title = styled.h2 `
    color: ${(props) => props.theme.colors.medium};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 24px;
    text-align: center;
`;

export const MoreInfo = styled.details `
    border-bottom: 1px solid ${(props) => props.theme.colors.medium};
`;

export const Summary = styled.summary `
    font-family: ${(props) => props.theme.fonts.regular};  
    color: ${(props) => props.theme.colors.text};
`;
    
export const Info = styled.p `
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.medium};
    padding: 12px;
`;

function Details() {
  return (
    <Wrapper>
        <Title>Dúvidas Frequentes</Title>
        <MoreInfo>
            <Summary>Mais informações.</Summary>
            <Info>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Impedit 
                reprehenderit et culpa provident 
                nemo atque odit natus itaque.
            </Info>
        </MoreInfo>
        <MoreInfo>
            <Summary>Mais informações.</Summary>
            <Info>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Impedit 
                reprehenderit et culpa provident 
                nemo atque odit natus itaque.
            </Info>
        </MoreInfo>
        <MoreInfo>
            <Summary>Mais informações.</Summary>
            <Info>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Impedit 
                reprehenderit et culpa provident 
                nemo atque odit natus itaque.
            </Info>
        </MoreInfo>
        <MoreInfo>
            <Summary>Mais informações.</Summary>
            <Info>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Impedit 
                reprehenderit et culpa provident 
                nemo atque odit natus itaque.
            </Info>
        </MoreInfo>
    </Wrapper>
  )
}

export default Details;