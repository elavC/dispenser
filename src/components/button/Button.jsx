import React from 'react';

import  styled  from 'styled-components';

export const Btn = styled.a `
    border: 2px solid black;
    color: white;
    font-family: ${(props) => props.theme.fonts.regular};
    background-color: #f77f00;
    font-weight: bold;
    border-radius: 12px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${(props) => props.theme.colors.dark};
      transform: scale(1.1);
    }
`;

function Button(props) {
  return (
    <Btn href="https://dispenser-one.catalog.yampi.io/dispneser-com-porta-escova/p">{ props.content }</Btn>
  )
}

export default Button;