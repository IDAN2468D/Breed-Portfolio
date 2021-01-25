import React from 'react';
import styled from 'styled-components';

function HeroText() {
    return (
        <Container>
            <h5>Online education for people of all ages</h5>
            <h1>Learn</h1>
            <h1>Anything.</h1>
            <h1>Anytime.</h1>
            <h1>Anywhere.</h1>
            <BtnContainer>
                <Button>Read More</Button>
                <Button>7 Day Trial</Button>
            </BtnContainer>
        </Container>
    )
}

export default HeroText


const Container = styled.div`
    padding: 1rem;

        h5{
            color: #515151;
            font-weight: 500;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }


        h1{
            font-size: 3.5rem;
            font-weight: 900;

                &:nth-of-type(1){
                    color: #af60ff;
                    font-weight: 700;
                }
                &:nth-of-type(2){
                    color: #8849c7;
                    font-weight: 700;
                }
                &:nth-of-type(3){
                    color: #651fac;
                    font-weight: 700;
                }
                &:nth-of-type(4){
                    color: #3c0473;
                    font-weight: 700;
                }
        }

`;

const BtnContainer = styled.div`
    margin-top: 2rem;
`;

const Button = styled.button`
    background-color: #81b1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;


        &:hover{
            box-shadow: 0px 17px 16px -11px #ecb6d7;
            transform: translateY(-5px);
        }
`;

