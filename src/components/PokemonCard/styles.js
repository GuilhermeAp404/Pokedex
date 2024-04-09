import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const BgType = styled.div`
    background: #cccccc;
    width: 100%;

    display:flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;

    h2{
        margin: 10px 0;
        
        font-family: 'Exo 2', Sans-serif;
        font-style: italic;
        font-weigth: 700;
        font-size: 34px;
        text-shadow: 0px 2px 2px #00000030;
        color: rgba(264,264,264, 0.75)
    }

    ${({ variant }) => (variant === 'fire' && css`background:#FA812A`)}
    ${({ variant }) => (variant === 'water' && css`background:#4169e1`)}
    ${({ variant }) => (variant === 'grass' && css`background:#68D14F`)}
    ${({ variant }) => (variant === 'electric' && css`background:#FFD200`)}
`;

export const PokeImg = styled.img`
    width: 95%;
    margin-bottom: -20px;
    z-index: 2;
`;

export const PokeStatsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 25px 10px 20px 10px;
    background: #FFFFFF;
`;

export const PokeStats = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Open Sans';
    padding: 5px 0px;
    width: 100%;
    border-bottom: 1px solid #c6c6c650;

    span{
        color: #c6c6c6 
    }
`;
