import styled from 'styled-components';

export const Wrapper = styled.section `
    width: 80%;
    margin: auto;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px
`;

export const Title = styled.h2 `
    color: ${(props) => props.theme.colors.medium};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 1.2rem;
    line-height: 24px;
    text-align: center;
`;

export const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    margin-bottom: 48px;
    width: 100%;
    gap: 40px;
    align-content: center;
    justify-items: center;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Card = styled.div`
    border: 1px solid ${(props) => props.theme.colors.medium};
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const ImgCard = styled.img `
    width: 120px;
    border: 1px solid black;
    border-radius: 50%;
`;

export const TitleCard = styled.h3 `
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
`;

export const InfoCard = styled.p `
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 0.7rem;
    line-height: 16px;
    text-align: center;
    max-width: 90%;
`;