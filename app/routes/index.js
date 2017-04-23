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
    receiver: '',
    contains: 'Tomatoes',
    category: 'Vegetables',
    caloriesPerKg: 750,
    img: '/tomatoes.jpeg',
    status: 'available'
  },{
    weight: 30,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: '',
    contains: 'Tomatoes',
    category: 'Vegetables',
    caloriesPerKg: 750,
    img: '/tomatoes.jpeg',
    status: 'available',

  },{
    weight: 100,
    bestBefore: moment().add(3, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Globus',
    receiver: 'Azylovy Dum Praha 5',
    category: 'Vegetables',
    caloriesPerKg: 2100,
    contains: 'Potatoes',
    img: '/potatoes.jpg',
    status: 'reserved',
  },{
    weight: 200,
    bestBefore: moment().add(4, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Klokanek',
    contains: 'Yogurt White',
    category: 'Dairy',
    caloriesPerKg: 1300,
    img: '/yogurt.jpg',
    status: 'reserved',
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Detsky Domov Blatna',
    contains: 'Eggs',
    category: 'Dairy',
    caloriesPerKg: 2800,
    img: '/eggs.jpg',
    status: 'reserved'
  },{
    weight: 50,
    bestBefore: moment().add(4, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Armada Spasy',
    contains: 'Bell Peppers',
    category: 'Vegetables',
    caloriesPerKg: 600,
    img: '/peppers.jpg',
    status: 'reserved'
  },{
    weight: 30,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Detsky Domov Dolni Pocernice',
    contains: 'Bananas',
    category: 'Fruits',
    caloriesPerKg: 1400,
    img: '/bananas.jpg',
    status: 'reserved'
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Detsky Domov Klanovice',
    contains: 'Onions',
    category: 'Vegetables',
    caloriesPerKg: 650,
    img: '/onions.jpg',
    status: 'delivered'
  },{
    weight: 100,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Armada Spasy',
    contains: 'Rice',
    category: 'Vegetables',
    caloriesPerKg: 1800,
    img: '/rice.jpg',
    status: 'delivered'
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Detsky Domov Praha 7',
    contains: 'Flour - Wheat - Fine',
    category: 'Flours',
    caloriesPerKg: 2100,
    img: '/flour.jpg',
    status: 'delivered'

  },{
    weight: 20,
    bestBefore: moment().add(30, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'Armada Spasy',
    contains: 'Sunflower Oil',
    category: 'Oils',
    caloriesPerKg: 3300,
    img: '/oil.jpg',
    status: 'delivered'
  }
  ],

  model(){
    return this.fixtures.map(fixture => {
      return this.store.createRecord('package', fixture);
    });
  }
});
