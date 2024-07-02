import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, IconButton, InputBase, Tooltip } from '@mui/material';
import { FaMapMarkerAlt, FaSearch, FaCoffee, FaSlidersH, FaInfoCircle } from 'react-icons/fa';
import axiosInstance from '../../api/axiosInstance';
import {
    Container,
    CoffeeShopCard,
    FeaturedShops,
    CoffeeShopImage,
    ImageWrapper,
    LoadingText,
    SearchBar,
    SortButton,
    SortOptions,
} from '../styles/HomeStyles';

const DEBOUNCE_DELAY = 300;

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('rating_desc');
    const [loading, setLoading] = useState(true);
    const [coffeeShops, setCoffeeShops] = useState([]);
    const [showSortOptions, setShowSortOptions] = useState(false);

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

    const handleSortClick = () => {
        setShowSortOptions(!showSortOptions);
    };

    const handleSortOptionChange = (option) => {
        setSortOption(option);
        setShowSortOptions(false);
    };

    return (
        <Container>
            <Toolbar style={{ backgroundColor: '#795548', color: '#fff', borderRadius: '10px' }}> {/* Coffee-themed colors */}
                <SearchBar>
                    <InputBase
                        placeholder=" Search..."
                        style={{ flex: 1 }}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <IconButton
                        color="inherit"
                        aria-label="search"
                    >
                        <FaSearch />
                    </IconButton>
                </SearchBar>
                <SortButton onClick={handleSortClick}>
                    <FaSlidersH />
                </SortButton>
                <Tooltip title="Advanced Search - Search by name, location, or menu items" placement="top">
                    <IconButton color="inherit">
                        <FaInfoCircle />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            {showSortOptions && (
                <SortOptions>
                    <div onClick={() => handleSortOptionChange('rating_desc')}>
                        Rating: High to Low
                    </div>
                    <div onClick={() => handleSortOptionChange('rating_asc')}>
                        Rating: Low to High
                    </div>
                    {/* Add more sort options as needed */}
                </SortOptions>
            )}
            <br />
            {loading && (
                <LoadingText>
                    <FaCoffee style={{ fontSize: '3em', marginBottom: '10px' }} />
                    <h3>Finding the best coffee...</h3>
                </LoadingText>
            )}
            {!loading && coffeeShops.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '20px', gridColumn: 'span 2' }}>
                    <FaCoffee style={{ fontSize: '3em', marginBottom: '10px' }} />
                    <h3>No coffee shops found. Maybe try a different search?</h3>
                </div>
            )}
            <FeaturedShops>
                {coffeeShops.map(shop => (
                    <CoffeeShopCard key={shop._id}>
                        <Link to={`/coffeeshop/${shop._id}`}>
                            <ImageWrapper>
                                <CoffeeShopImage
                                    src={shop.image}
                                    alt={shop.name}
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
