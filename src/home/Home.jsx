import React from 'react';

import { Wrapper, SectionHero, SubTitle, Title } from './style';

import { Button, Video, SafeBuy } from '../components/exports';

function Home() {
    return (
        <Wrapper>
            <SectionHero>
                <SubTitle>O seu banheiro sempre organizado e limpo</SubTitle>
                <Title>Dispenser Com suporte para escova de dentes</Title>
                <Video/>
                <Button content="Comprar" />
                <SafeBuy />
            </SectionHero>
        </Wrapper>
    )
}

export default Home;

