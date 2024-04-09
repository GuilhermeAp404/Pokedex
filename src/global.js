import { createGlobalStyle } from 'styled-components';
import pokeBG from './assets/pokeBG.jpg';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-image: url(${pokeBG});
        background-size: cover;
    }
`;

export default GlobalStyle;
