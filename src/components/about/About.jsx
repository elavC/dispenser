import React from 'react';

import { 
    ImgDispenderFechado,
    ImgDispenser, 
    ImgSuporte, 
    ImgDispenserRemoveBg,
    ImgDispenserInside,
    ImgDispenserArea,
    Button,
    SafeBuy,
  }  
from '../exports';

import {
    Wrapper, 
    Title, 
    Container, 
    Card, 
    ImgCard, 
    TitleCard,
    InfoCard,
  } 
from './style';

function About() {
  return (
    <Wrapper>
        <Title>Vantagens de ter o Dispenser no seu Banheiro</Title>
        <Container>
            <Card>
              <ImgCard src={ImgDispenderFechado}/>
              <TitleCard>+ Organização</TitleCard>
              <InfoCard>
                  Com o suporte para creme dental e suporte
                  para até 5 escovas de dente, o seu 
                  banheiro fica super organizado.
              </InfoCard>
            </Card>
            <Card>
              <ImgCard src={ImgDispenser}/>
              <TitleCard>- Desperdicio</TitleCard>
              <InfoCard>
                Com o Dipenser para creme dental o desperdício
                é mínimo. Utilizando o vácuo criado na embalagem 
                do creme dental para retirar cada ml, sem esforço algum.  
              </InfoCard>
            </Card>
            <Card>
              <ImgCard src={ImgSuporte}/>
              <TitleCard>+ Limpo</TitleCard>
              <InfoCard>
                Manter suas escovas separadas uma das outras, 
                impede a propagação de bactérias, com o 
                suporte para escovas de dente o dispenser 
                evita o contato entre escovas. Ou seja, mais 
                higiene para o seu banheiro.
              </InfoCard>
            </Card>
            <Card>
              <ImgCard src={ImgDispenserRemoveBg}/>
              <TitleCard>Fácil de Usar</TitleCard>
              <InfoCard>
                Se adapta a qualquer superfície facilmentee ainda 
                acompanha um lindo suporte que organiza as escovas de dente. 
              </InfoCard>
            </Card>
            <Card>
              <ImgCard src={ImgDispenserInside}/>
              <TitleCard>Como funciona</TitleCard>
              <InfoCard>
                Removendo a tampa do Dispenser, basta encaixar
                o creme dental na parte de cima do Dispenser e 
                fechar a tampa. Simples e fácil. 
              </InfoCard>
            </Card>
            <Card>
              <ImgCard src={ImgDispenserArea}/>
              <TitleCard>Compacto</TitleCard>
              <InfoCard>
                Extremamente compacto, utilizando somente 
                o espaço necessário para sua instalação. 
                Com a fita de dupla face, a instalação é 
                simples e não precisa furar a sua parede.                 
              </InfoCard>
            </Card>
        </Container>
          <Button content="Comprar agora"/>
          <SafeBuy />
    </Wrapper>
  )
}

export default About