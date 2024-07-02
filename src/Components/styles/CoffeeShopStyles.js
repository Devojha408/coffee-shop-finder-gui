import styled from "styled-components";
import coffeeWebp from '../../../asset/coffee.webp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${coffeeWebp});
  background-size: 'cover';
  background-position: 'center';
  color: #333;

  .header {
    position: relative;
    width: 100%;
    height: 50vh; /* Adjust height as needed */
    overflow: hidden;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
  }

  .back-link {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
    text-decoration: none;
  }

  .back-icon {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const CoffeeShopDetails = styled.div`
  text-align: center;
  background-color: #ffffffb2;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    margin: 5px 0;
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
  background-color: #ffffffb2;
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
