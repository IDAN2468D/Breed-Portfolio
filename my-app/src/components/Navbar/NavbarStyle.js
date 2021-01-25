import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    padding: 2rem;


    svg{
        height: 1.4rem;
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;


        @media (max-width: 768px){
            flex-direction: column;
            overflow: hidden;
            border-radius: 1rem;
            margin-top: 1rem;
            box-shadow: -4px 8px 1 rgba(0,0,0, 0.07);
            max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
            transition: max-height 0.3s ease-in;
            width: 100%;
            backdrop-filter: blur(15px);
            background-color: rgba(255,255,255, 0.5);
        }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;

        @media (max-width: 768px){
            flex-direction: column;
        }
`;

export const MenuLink = styled.a`
        text-decoration: none;
        color: #858585;
        font-size: 0.9rem;
        padding: 0.7rem 1.5rem;
        margin-bottom: 10px;
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;

            &:hover{
            color: #7781d4;
            background: #e7e9fc;
            text-decoration: none;
        }
`;

export const Button = styled.button`
    font-size: 0.8rem;
    background: #f774c5;
    border: none;
    padding: 0.8rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 17px 16px -11px #ecb6d7;
        transform: translateY(-5px);
    }

        
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 2px;
        width: 25px;
        background: #f774c5;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 670px){
        display: flex;
    }

`;