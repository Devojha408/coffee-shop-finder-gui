import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    color: #333;
`;

export const CoffeeShopDetails = styled.div`
    text-align: center;
    margin-bottom: 20px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 10px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        color: #555;
    }
`;

export const ProductList = styled.div`
    width: 100%;

    h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;

export const ProductCard = styled.li`
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        margin: 0 0 5px 0;
    }

    p {
        margin: 5px 0;
        color: #555;
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
