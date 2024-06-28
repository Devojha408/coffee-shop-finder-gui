import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, CoffeeShopDetails, ProductList, MapContainer } from '../styles/CoffeeShopStyles';
import { coffeeShops } from '../../data/dummyData';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

function CoffeeShop() {
    const { id } = useParams();
    const shop = coffeeShops.find(shop => shop._id === id);

    if (!shop) return <p>Coffee shop not found</p>;

    const position = [37.7749, -122.4194]; // Sample coordinates (San Francisco, CA)

    return (
        <Container>
            <CoffeeShopDetails>
                <img src={shop.image} alt={shop.name} />
                <h1>{shop.name}</h1>
                <p>{shop.location}</p>
                <p>{shop.rating} ★</p>
            </CoffeeShopDetails>
            <ProductList>
                <h2>Products</h2>
                <ul>
                    {shop.products.map(product => (
                        <li key={product._id}>
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <p>{product.category}</p>
                        </li>
                    ))}
                </ul>
            </ProductList>
            <MapContainer>
                <LeafletMap center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>{shop.name}</Popup>
                    </Marker>
                </LeafletMap>
            </MapContainer>
        </Container>
    );
}

export default CoffeeShop;