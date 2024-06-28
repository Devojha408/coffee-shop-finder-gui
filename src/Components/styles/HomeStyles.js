import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    color: #333;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    input {
        border: none;
        outline: none;
        margin-right: 10px;
        font-size: 16px;
        flex: 1;
    }

    svg {
        color: #888;
    }
`;

export const FeaturedShops = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
`;

export const CoffeeShopCard = styled.div`
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    h2 {
        margin: 10px 0;
        font-size: 18px;
    }

    p {
        margin: 5px 0;
        color: #555;
    }

    svg {
        color: #ff6347;
    }
`;

const skeletonAnimation = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

export const ImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
`;

export const LoadingSkeleton = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #e0e0e0;
    background-image: linear-gradient(90deg, #e0e0e0 0px, #f0f0f0 40px, #e0e0e0 80px);
    background-size: 200px 100%;
    animation: ${skeletonAnimation} 1.2s ease-in-out infinite;
`;

export const CoffeeShopImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
