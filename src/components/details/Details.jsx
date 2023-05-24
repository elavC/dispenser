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
            <Summary>Em quanto tempo meu Dispenser chega?.</Summary>
            <Info>
                Caso, você seja de Belém-PA ou Ananindeua-PA, 
                seu dispenser chega em até 2 dias úteis. 
                Caso você seja de outra região, o prazo é 
                de acordo com os correios.
            </Info>
        </MoreInfo>
        <MoreInfo>
            <Summary>Preciso furar a parede para instalar?</Summary>
            <Info>
                Não! O dispenser vai com adesivos dupla face
                de fácil instalação. basta colocar o 
                adesivo na parte de traz do dispenser 
                e colocar na parede.
            </Info>
        </MoreInfo>
        <MoreInfo>
            <Summary>Quantas escovas eu posso colocar no porta escova?</Summary>
            <Info>
                O porta escova tem entrada para até 5 escovas de dentes.
            </Info>
        </MoreInfo>
    </Wrapper>
  )
}

export default Details;