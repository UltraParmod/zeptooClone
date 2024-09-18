import ImagePath from '../utils/ImagePath';

export const ProductsApi = [
  {
    name: 'Apple',
    grams: 500,
    price: 20,
    discounted_price: 11,
    images: ImagePath.imageData01,
    description: `Description: Apples are round fruits with a variety of colors including red, green, and yellow. They have a crisp texture and can be sweet, tart, or a mix of both. Apples are commonly eaten fresh, but they can also be used in cooking, baking, and making juices or cider.
Varieties: Examples include Fuji, Gala, Granny Smith, and Honeycrisp.`,
    discount_Percentage: 10,
  },
  {
    name: 'Banana',
    grams: 500,
    price: 50,
    discounted_price: 15,
    images: ImagePath.imageData02,
    description: `Description: Bananas are elongated, yellow fruits with a soft, sweet flesh. They have a peel that is easily removed. Bananas are rich in potassium and are often eaten raw but can also be used in baking and smoothies.
Varieties: Common types include Cavendish, Red Banana, and Plantain.
:`,
    discount_Percentage: 10,
  },
  {
    name: 'Feash Cherry',
    grams: 500,
    price: 70,
    discounted_price: 45,
    images: ImagePath.imageData03,
    description: `Description: Cherries are small, round fruits that come in red, black, or yellow. They are known for their sweet or tart flavor and are enjoyed fresh or used in desserts, jams, and beverages.
Varieties: Examples include Bing, Rainier, and Montmorency.:`,
    discount_Percentage: 10,
  },
  {
    name: 'Date Bananas',
    grams: 500,
    price: 58,
    discounted_price: 25,
    images: ImagePath.imageData04,
    description: `Description: Dates are sweet, chewy fruits with a rich flavor. They are typically brown and have a pit inside. Dates are often used in Middle Eastern cuisines and are enjoyed as a natural sweetener or snack.
Varieties: Popular types include Medjool, Deglet Noor, and Barhi.:`,
    discount_Percentage: 10,
  },
  {
    name: 'Grapes',
    grams: 500,
    price: 30,
    discounted_price: 15,
    images: ImagePath.imageData05,
    description: `Description: Grapes are small, round fruits that come in various colors, including green, red, and purple. They can be sweet or tart and are eaten fresh, dried as raisins, or fermented into wine.
Varieties: Examples include Thompson Seedless, Concord, and Red Globe.`,
    discount_Percentage: 10,
  },
  {
    name: 'Orange',
    grams: 500,
    price: 70,
    discounted_price: 25,
    images: ImagePath.imageData06,
    description: `Description: Oranges are citrus fruits known for their bright orange skin and juicy, tangy flesh. They are rich in vitamin C and are commonly eaten fresh or juiced. Oranges can also be used in cooking and baking.
Varieties: Common types include Navel, Valencia, and Blood Orange.`,
    discount_Percentage: 10,
  },
];

export const Categories = [
  'Dairy, Bread & Eggs ',
  'Cold Drinks & Juices',
  'Tea, Coffee & More',
  'Masala, Dry Fruites & More',
  'Dairy, Bread & Eggs ',
  'Cold Drinks & Juices',
  'Tea, Coffee & More',
  'Masala, Dry Fruites & More',
  'Dairy, Bread & Eggs ',
  'Cold Drinks & Juices',
  'Tea, Coffee & More',
  'Masala, Dry Fruites & More',
];
