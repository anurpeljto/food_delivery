export type Dish = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: any; // 
  };
  
  export type Restaurant = {
    id: number;
    name: string;
    image: any; // 
    description?: string;
    lng: number;
    lat: number;
    reviews: number;
    stars: number;
    address: string;
    category: string;
    dishes: Dish[];
  };
  
  export type Category = {
    id: number;
    name: string;
    image: string; // 
  };
  
  export type FeaturedRestaurant = {
    id: number;
    title: string;
    description: string;
    restaurants: Restaurant[];
  };
  
  export const featuredRestaurants: FeaturedRestaurant[] = [
    {
      id: 1,
      title: 'Pizza',
      description: 'For all your pizza needs',
      restaurants: [
        {
          id: 1,
          name: 'Montana',
          image: require('../assets/images/restaurants/montana.jpeg'),
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
          ],
        },
        {
          id: 2,
          name: 'Montana low review',
          image: require('../assets/images/restaurants/montana.jpeg'),
          lng: 43.84970815254865,
          lat: 18.36629368327564,
          reviews: 653,
          stars: 2.5,
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
          image: require('../assets/images/restaurants/montana.jpeg'),
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
      
      ],

    },

    // ADD NEW CATEGORY HERE
    {
      id: 2,
      title: 'Burgers',
      description: 'Tasty burgers',
      restaurants: [
        {
          id: 1,
          name: 'KFC',
          image: require('../assets/images/restaurants/bdcd233971b7c81bf77e1fa4471280eb (1).webp'),
          description: "Finger Lickin' Good",
          lng: 43.84970815254865,
          lat: 18.36629368327564,
          reviews: 653,
          stars: 3.2,
          address: 'Bulevar Meše Selimovića 2c',
          category: 'Burgers',
          dishes: [
            {
              id: 1,
              name: 'burger',
              description: 'regular burger',
              price: 10,
              image: require('../assets/images/dishes/images (1) (1).jpeg'),
            },
          ],
        },
        {
          id: 2,
          name: 'Šah Mat',
          image: require('../assets/images/restaurants/disadvantages-of-fast-food (1).webp'),
          lng: 43.84970815254865,
          lat: 18.36629368327564,
          reviews: 653,
          stars: 2.5,
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
          image: require('../assets/images/restaurants/montana.jpeg'),
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
      
      ],

    },
    
  ];
  
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