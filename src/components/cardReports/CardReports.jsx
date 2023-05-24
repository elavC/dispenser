import React from 'react';
import styled  from 'styled-components';

export const Card = styled.div`
    display: flex;
    width: 200px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    background-image: url(${(props) => props.photo});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 550px) {
        width: 96%;
        display: flex;
        justify-content: center;
    }
`;

const CardReports = ({ photo }) => (
    <Card photo={ photo }></Card>
) 


export default CardReports;