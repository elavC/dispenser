import styled from 'styled-components';

export const Wrapper = styled.main `
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    display: flex;
`;

export const SectionHero = styled.section `
    background-color: ${(props) => props.theme.colors.light};
    width: 80%;
    height: 90vh;
    margin: auto;
    margin-top: 48px;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 700px) {
        width: 90%;
    }
`;

export const SubTitle = styled.span `
    color: ${(props) => props.theme.colors.medium};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 24px;
    text-align: center;

    @media (max-width: 550px) {
        width: 95%;
    }
`;

export const Title = styled.h1 `
    color: ${(props) => props.theme.colors.dark};
    font-family: ${(props) => props.theme.fonts.regular};
    text-align: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 48px;

    @media (max-width: 550px) {
        width: 95%;
        font-size: 1.2rem;

    }
`;