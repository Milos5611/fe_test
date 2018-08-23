const products = [
  {
    id: 1,
    name: 'YI Dome Camera',
    image: 'https://images-na.ssl-images-amazon.com/images/I/415JFAW8vtL.jpg',
    price: 4059,
  },
  {
    id: 2,
    name: 'High Speed USB Charger Outlet',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61-NkUZxgdL._SL1500_.jpg',
    price: 1270,
  },
  {
    id: 3,
    name: 'Premium Quality Cabana Beach Towels',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91bQtJBv9xL._SL1500_.jpg',
    price: 2999,
  },
  {
    id: 4,
    name: 'ATGOIN Lightweight Bluetooth Earbuds',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61Hix73lQoL._SL1500_.jpg',
    price: 2499,
  },
  {
    id: 5,
    name: 'Ebaco 5 Colorful Knife Set',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61gimAcAHbL._SL1000_.jpg',
    price: 1499,
  },
  {
    id: 6,
    name: 'Lime, One Medium',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81HZUsK9dRL._SX522_.jpg',
    price: 25,
  },
  {
    id: 7,
    name: 'Blueberries, 6 oz',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81Oz-020YaL._SL1500_.jpg',
    price: 399,
  },
  {
    id: 8,
    name: 'Low-Fat Greek Yogurt',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81zQLrZUTzL._SX522_.jpg',
    price: 100,
  },
  {
    id: 9,
    name: 'Cheerios',
    image: 'https://images-na.ssl-images-amazon.com/images/I/912a39r165L._SX522_.jpg',
    price: 350,
  },
];

export async function fetchProducts() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return products;
}
