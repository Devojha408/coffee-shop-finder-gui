// src/data/dummyData.js
export const coffeeShops = [
    {
        _id: '1',
        name: 'Home Coffee Roasters',
        location: 'San Francisco, CA',
        rating: 4.5,
        image: 'https://via.placeholder.com/150',
        products: [
            { _id: '1', name: 'Café Mocha', price: 3.00, category: 'Coffee' },
            { _id: '2', name: 'Caramel Macchiato', price: 4.00, category: 'Coffee' },
        ],
    },
    {
        _id: '2',
        name: 'Haus Coffee',
        location: 'San Francisco, CA',
        rating: 4.4,
        image: 'https://via.placeholder.com/150',
        products: [
            { _id: '3', name: 'Espresso', price: 2.50, category: 'Coffee' },
            { _id: '4', name: 'Latte', price: 3.50, category: 'Coffee' },
        ],
    },
];
