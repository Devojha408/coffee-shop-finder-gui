import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CoffeeShopDetails, ProductList, MapContainer, ProductCard } from '../styles/CoffeeShopStyles';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import axiosInstance from '../../api/axiosInstance';

function CoffeeShop() {
    const { id } = useParams();
    const [shop, setShop] = useState(null);

    useEffect(() => {
        const fetchCoffeeShop = async () => {
            try {
                const response = await axiosInstance.get(`/coffeeshops/${id}`);
                setShop(response.data);
            } catch (error) {
                console.error('Error fetching coffee shop:', error);
            }
        };

        fetchCoffeeShop();
    }, [id]);

    if (!shop) return <p>Loading...</p>;

    const position = [shop.coordinates.lat, shop.coordinates.lng];

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
                        <ProductCard key={product._id}>
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <p>{product.category}</p>
                        </ProductCard>
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
