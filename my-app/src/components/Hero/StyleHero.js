import styled from 'styled-components';
import Tilt from 'react-tilt';


export const TiltWrapper = styled(Tilt)`
    width: 60%;
    
    @media (max-width: 670px){
            display: none;
        }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(255,255,255, 0.5);
    backdrop-filter: blur(35px);
`;

export const InnerWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


        img{
            width: 100%;
        }
`;

export const Left = styled.div`
    width: 40%;



        @media (max-width: 678px){
            width: 100%;
        }
`;
