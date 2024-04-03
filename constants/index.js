export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/categories/icons8-pizza-96.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/categories/icons8-hamburger-96.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/categories/icons8-spaghetti-96.png'),
    },
    {
        id: 4,
        name:'Chinese',
        image: require('../assets/images/categories/icons8-takeout-box-96.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/categories/icons8-takeout-box-96.png'),
    },
    {
        id: 6,
        name:'Sweets',
        image: require('../assets/images/categories/icons8-cupcake-emoji-96.png'),
    },
];

export const featuredRestaurants = {
    id: 1,
    title: 'Hot & Spicy',
    description: 'crispy fried chicken',
    restaurants : [
        {
            id: 1,
            name: 'Montana',
            image: require('../assets/images/categories/icons8-pizza-96.png'),
            description: 'Good pizza, decent price',
            lng: 43.84970815254865,
            lat: 18.36629368327564,
            reviews: 653,
            stars: 3.2,
            address: 'Bulevar Meše Selimovića 2c',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'regular pizza',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id: 2,
                    name: 'stuffed pizza',
                    description: 'Crust stuffed with cheese',
                    price: 12,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id:3,
                    name: 'pizza capriciosa',
                    description: 'Pizza with mushrooms',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                }
            ]

        },
        {
            id: 2,
            name: 'Montana',
            image: require('../assets/images/categories/icons8-pizza-96.png'),
            description: 'Good pizza, decent price',
            lng: 43.84970815254865,
            lat: 18.36629368327564,
            reviews: 653,
            stars: 3.2,
            address: 'Bulevar Meše Selimovića 2c',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'regular pizza',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id: 2,
                    name: 'stuffed pizza',
                    description: 'Crust stuffed with cheese',
                    price: 12,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id:3,
                    name: 'pizza capriciosa',
                    description: 'Pizza with mushrooms',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                }
            ]

        },
        {
            id: 3,
            name: 'Montana',
            image: require('../assets/images/categories/icons8-pizza-96.png'),
            description: 'Good pizza, decent price',
            lng: 43.84970815254865,
            lat: 18.36629368327564,
            reviews: 653,
            stars: 3.2,
            address: 'Bulevar Meše Selimovića 2c',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'regular pizza',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id: 2,
                    name: 'stuffed pizza',
                    description: 'Crust stuffed with cheese',
                    price: 12,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                },
                {
                    id:3,
                    name: 'pizza capriciosa',
                    description: 'Pizza with mushrooms',
                    price: 10,
                    image: require('../assets/images/dishes/images (2).jpeg'),
                }
            ]

        }
    ]
}