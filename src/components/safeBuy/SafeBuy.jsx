import React from 'react';
import CompraSegura from '../../assets/compra-segura.png';
import styled from 'styled-components';

export const ImageSafe = styled.img `
    border-radius: 12px;
    width: 14rem;
`;

function SafeBuy() {
  return (
    <ImageSafe src={CompraSegura}/>   
    
    )
}

export default SafeBuy