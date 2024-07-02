import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  backgroundColor: '#795548';
  color: '#fff' ;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
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

export const SortButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

export const SortOptions = styled.div`
  position: absolute;
  top: 64px;
  right: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;

  div {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const FeaturedShops = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const CoffeeShopCard = styled.div`
  background-color: #ffffffb2;
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

export const CoffeeShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
`;

export const LoadingText = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    color: #888;
  }
`;
