import React from 'react';
import { Container, Wrapper, InnerWrapper, Left, TiltWrapper } from './StyleHero';
import HeroText from './HeroText';
import image from '../../images/hero.png';
import bg from '../../images/bg.png';


function Hero() {
    return (
        <Container bg={bg}>
            <Wrapper>
                <InnerWrapper>
                    <Left>
                        <HeroText />
                    </Left>
                    <TiltWrapper options={{ max: 25 }}>
                        <img src={image} alt="Hero" />
                    </TiltWrapper>
                </InnerWrapper>
            </Wrapper>
        </Container>
    )
}

export default Hero
