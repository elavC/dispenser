import React from 'react';

import styled from 'styled-components';

import { ImgBigBuy, ImgTruck } from '../exports';

export const Buy = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-top: 48px;
    `;

    export const Title = styled.h2 `
    color: ${(props) => props.theme.colors.medium};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: bold;
    text-align: center;
    `;
    
    export const Wrapper = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 24px;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }
`;

export const Card = styled.div `
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: 550px) {
        gap: 12px;
    }

`;

export const ImgCard = styled.img `
    width: 80%;
    height: 80px;
`;

export const TitleImage = styled.h3 `
    color: ${(props) => props.theme.colors.medium};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: bold;
    text-align: center;
    
    @media (max-width: 550px) {
        font-size: 24px;
    }
`;

export const Info = styled.p `
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    text-align: center;
`;

function SBuy() {
  return (
    <Buy>
        <Title>Não tem hábito de comprar na internet? Fique tranquilo(a)!</Title>
        <Wrapper>
            <Card>
                <ImgCard src={ImgBigBuy}/>
                <TitleImage>Site Seguro</TitleImage>
                <Info>
                    Site 100% confiável e autenticado 
                    por empresas de segurança.
                </Info>
            </Card>
            <Card>
                <ImgCard src={ImgTruck}/>
                <TitleImage>Entrega Garantida</TitleImage>
                <Info>
                    Entrega garantida no prazo 
                    combinado e política de devolução.
                </Info>
            </Card>
        </Wrapper>
    </Buy>
  )
}

export default SBuy;