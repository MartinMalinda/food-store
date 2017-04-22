import Ember from 'ember';

export default Ember.Route.extend({

  fixtures: [
  {
    weight: 20,
    bestBefore: moment().add(1, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Tomatoes',
    category: 'Vegetables',
    caloriesPerKg: 750,
    img: 'https://static.pexels.com/photos/68133/tomatoes-vegetables-red-delicious-68133.jpeg'
  },{
    weight: 30,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO2',
    contains: 'Tomatoes',
    category: 'Vegetables',
    caloriesPerKg: 750,
    img: 'https://static.pexels.com/photos/68133/tomatoes-vegetables-red-delicious-68133.jpeg'

  },{
    weight: 100,
    bestBefore: moment().add(3, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Globus',
    receiver: 'NGO2',
    category: 'Vegetables',
    caloriesPerKg: 2100,
    contains: 'Potatoes',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Potato_heart_mutation.jpg'
  },{
    weight: 200,
    bestBefore: moment().add(4, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Yogurt White',
    category: 'Dairy',
    caloriesPerKg: 1300,
    img: 'https://static.pexels.com/photos/85653/milk-flowing-yoghurt-liquid-85653.jpeg'
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Eggs',
    category: 'Dairy',
    caloriesPerKg: 2800,
    img: 'https://static.pexels.com/photos/8439/food-eggs.jpg'
  },{
    weight: 50,
    bestBefore: moment().add(4, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Bell Peppers',
    category: 'Vegetables',
    caloriesPerKg: 600,
    img: 'https://www.thestar.com/content/dam/thestar/news/world/2015/11/30/helping-the-planet-by-loving-ugly-vegetables/jimmy-durante.jpg'
  },{
    weight: 30,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Bananas',
    category: 'Fruits',
    caloriesPerKg: 1400,
    img: 'http://i.imgur.com/FY59cdc.jpg'
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Onions',
    category: 'Vegetables',
    caloriesPerKg: 650,
    img: 'http://dingo.care2.com/pictures/greenliving/1371/1370388.large.jpg'
  },{
    weight: 100,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Rice',
    category: 'Vegetables',
    caloriesPerKg: 1800,
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Rice_p1160004.jpg'
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Flour - Wheat - Fine',
    category: 'Flours',
    caloriesPerKg: 2100,
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/White_flour.jpg'
  },{
    weight: 20,
    bestBefore: moment().add(30, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Sunflower Oil',
    category: 'Oils',
    caloriesPerKg: 3300,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Zonnebloemolie_%28Sunflower_oil%29.jpg/394px-Zonnebloemolie_%28Sunflower_oil%29.jpg'
  }
  ],

  model(){
    return this.fixtures.map(fixture => {
      return this.store.createRecord('package', fixture);
    });
  }
});
