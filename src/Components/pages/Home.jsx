import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaCoffee } from 'react-icons/fa'; // Import FaCoffee for the coffee cup icon
import axiosInstance from '../../api/axiosInstance';
import {
    Container,
    CoffeeShopCard,
    SearchBar,
    FeaturedShops,
    CoffeeShopImage,
    ImageWrapper,
    FilterContainer,
    SortSelect,
    PlaceholderImage
} from '../styles/HomeStyles';

const DEBOUNCE_DELAY = 300;

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('rating_desc');
    const [loading, setLoading] = useState(true);
    const [coffeeShops, setCoffeeShops] = useState([]);

    const fetchCoffeeShops = useCallback(async (query, sort) => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/coffeeshops', {
                params: {
                    query,
                    sort,
                },
            });
            setCoffeeShops(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching coffee shops:', error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchCoffeeShops(searchTerm, sortOption);
        }, DEBOUNCE_DELAY);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm, sortOption, fetchCoffeeShops]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Container>
            <SearchBar>
                <input
                    type="text"
                    placeholder="Find a coffee shop anywhere..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: '300px' }} // Adjust width as needed
                />
                <FaSearch />
            </SearchBar>
            <FilterContainer>
                <SortSelect
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="rating_desc">Rating: High to Low</option>
                    <option value="rating_asc">Rating: Low to High</option>
                    {/* Add more sort options as needed */}
                </SortSelect>
            </FilterContainer>
            <FeaturedShops>
                {loading &&
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <FaCoffee style={{ fontSize: '3em', marginBottom: '10px' }} />
                        <p>Finding the best coffee...</p>
                    </div>}
                {!loading && coffeeShops.length === 0 && <div style={{ textAlign: 'center', marginTop: '20px', gridColumn: 'span 2' }}>
                    <FaCoffee style={{ fontSize: '3em', marginBottom: '10px' }} />
                    <p>No coffee shops found. Maybe try a different search?</p>
                </div>}
                {coffeeShops.map(shop => (
                    <CoffeeShopCard key={shop._id}>
                        <Link to={`/coffeeshop/${shop._id}`}>
                            <ImageWrapper>
                                <PlaceholderImage loaded={shop.imageLoaded} />
                                <CoffeeShopImage
                                    src={shop.image}
                                    alt={shop.name}
                                    onLoad={() => {
                                        shop.imageLoaded = true;
                                        setCoffeeShops([...coffeeShops]);
                                    }}
                                    loaded={shop.imageLoaded}
                                />
                            </ImageWrapper>
                            <h2>{shop.name}</h2>
                            <p><FaMapMarkerAlt /> {shop.location}</p>
                            <p>⭐ {shop.rating} ({shop.reviews} reviews)</p>
                        </Link>
                    </CoffeeShopCard>
                ))}
            </FeaturedShops>
        </Container>
    );
}

export default Home;
