import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
`;

export const CoffeeShopDetails = styled.div`
    text-align: center;

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    h1 {
        margin: 20px 0 10px;
        font-size: 2em;
    }

    p {
        margin: 5px 0;
    }
`;

export const ProductList = styled.div`
    margin-top: 40px;

    h2 {
        margin-bottom: 20px;
        font-size: 1.5em;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;

            h3 {
                margin: 0;
                font-size: 1.2em;
            }

            p {
                margin: 5px 0;
            }
        }
    }
`;

export const MapContainer = styled.div`
    margin-top: 40px;
`;