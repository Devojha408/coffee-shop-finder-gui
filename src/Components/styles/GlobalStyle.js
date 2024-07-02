import { createGlobalStyle } from 'styled-components';
import coffeeWebp from '../../../asset/coffee.webp';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-image: url(${coffeeWebp});
        background-size: 'cover';
        background-position: 'center';
    }
`;

export default GlobalStyle;
