import React from 'react';
import { GlobalStyle } from './styles';
import { FooterWrapper, TopContent, MainContent } from './styles/Pages';

const Team = (props) => {
    return(
        <FooterWrapper>
            <GlobalStyle />
            <TopContent>
                <h1>MEET THE TEAM</h1>
                <p>ALIQUAM UT EX UT INTERDUM DONEC AMET IMPERDIET ELEIFEND</p>
            </TopContent>
            <MainContent>
                <h2>LOREM IPSUM DOLOR</h2>
                <p>Ullamco excepteur irure reprehenderit dolore reprehenderit reprehenderit elit sint irure nulla. Exercitation consectetur fugiat nisi irure ut elit veniam officia eu labore qui. Enim ad esse ex nostrud voluptate do minim nulla ea voluptate laborum voluptate. Cupidatat laboris mollit cillum laborum esse minim dolore ut ullamco.</p>
            </MainContent>
        </FooterWrapper>
    )
}

export default Team;