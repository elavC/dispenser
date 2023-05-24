import styled from 'styled-components';

export const Wrapper = styled.section `
    background-color: ${(props) => props.theme.colors.reports};
    width: 100%;
    margin-top: 32px;
    padding: 48px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div `
    width: 80%;
    padding: 12px;
    background-color: gray;
    border-radius: 12px;

    @media (max-width: 550px) {
        width: 100%;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;
