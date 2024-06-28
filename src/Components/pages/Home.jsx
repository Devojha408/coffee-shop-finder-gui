import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, CoffeeShopCard, SearchBar, FeaturedShops } from '../styles/HomeStyles';
import { coffeeShops } from '../../data/dummyData';
import { FaMapMarkerAlt, FaHeart, FaSearch } from 'react-icons/fa';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Container>
            <SearchBar>
                <input 
                    type="text" 
                    placeholder="Find a coffee shop anywhere..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch />
            </SearchBar>
            <FeaturedShops>
                {coffeeShops
                    .filter(shop => shop.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(shop => (
                        <CoffeeShopCard key={shop._id}>
                            <Link to={`/coffeeshop/${shop._id}`}>
                                <img src={shop.image} alt={shop.name} />
                                <h2>{shop.name}</h2>
                                <p><FaMapMarkerAlt /> {shop.location}</p>
                                <p>⭐ {shop.rating} ({shop.reviews} reviews)</p>
                                <FaHeart />
                            </Link>
                        </CoffeeShopCard>
                    ))
                }
            </FeaturedShops>
        </Container>
    );
}

export default Home;
