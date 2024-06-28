import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;

    input {
        width: 100%;
        max-width: 600px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    svg {
        position: absolute;
        right: 20px;
        color: #aaa;
    }
`;

export const FeaturedShops = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
`;

export const CoffeeShopCard = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 280px;
    position: relative;

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }

    h2 {
        margin: 10px 0;
        font-size: 1.5em;
    }

    p {
        margin: 5px 0;
    }

    svg {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ff6b6b;
    }
`;