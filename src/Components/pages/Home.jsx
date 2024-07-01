import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, CoffeeShopCard, SearchBar, FeaturedShops, CoffeeShopImage, ImageWrapper, LoadingSkeleton } from '../styles/HomeStyles';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import axiosInstance from '../../api/axiosInstance';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setFilterOption] = useState(''); // Example filter option

    const [loading, setLoading] = useState(true);
    const [coffeeShops, setCoffeeShops] = useState([]);

    useEffect(() => {
        const fetchCoffeeShops = async () => {
            try {
                const response = await axiosInstance.get('/coffeeshops');
                setCoffeeShops(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coffee shops:', error);
                setLoading(false);
            }
        };

        fetchCoffeeShops();
    }, []);

    const filteredCoffeeShops = coffeeShops.filter(shop => {
        return shop.name.toLowerCase().includes(searchTerm.toLowerCase())
            && (filterOption === '' || shop.location === filterOption); // Example filter condition
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <SearchBar>
                <input
                    type="text"
                    placeholder="Find a coffee shop anywhere..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '300px' }} // Adjust width as needed
                />
                <FaSearch />
            </SearchBar>
            {/* Example filter dropdown */}
            <div>
                <label>Filter by Location:</label>
                <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                    <option value="">All</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    {/* Add more options based on your locations */}
                </select>
            </div>
            <br></br>
            <FeaturedShops>
                {filteredCoffeeShops.map(shop => (
                    <CoffeeShopCard key={shop._id}>
                        <Link to={`/coffeeshop/${shop._id}`}>
                            <ImageWrapper>
                                {loading ? <LoadingSkeleton /> : <CoffeeShopImage src={shop.image} alt={shop.name} />}
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