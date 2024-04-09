import styled, { css } from 'styled-components';

const IconContainer = styled.div`
    background: #cccccc;
    padding:8px;
    border-radius: 50%;

    display: flex;
    align-items:center;
    justify-content: center;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    img{
        height: 48px;
        width:48px;
    }

    &:hover{
        transform: scale(1.1, 1.1);
    }

    ${({ variant }) => (variant === 'fire' && css`background:#FA812A`)}
    ${({ variant }) => (variant === 'water' && css`background:#4169e1`)}
    ${({ variant }) => (variant === 'grass' && css`background:#68D14F`)}
    ${({ variant }) => (variant === 'electric' && css`background:#FFD200`)}
`;

export default IconContainer;
