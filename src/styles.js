import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 32px;
    
    @media (max-width: 600px){
        flex-direction: column;
        padding: 10px;
    }
`;
export const IconColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;

    @media (max-width: 600px){
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
`;
