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
    caloriesPerKg: 750
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
    caloriesPerKg: 750

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
    contains: 'Potatoes'
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
    caloriesPerKg: 1300
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
    caloriesPerKg: 2800
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
    caloriesPerKg: 600
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
    caloriesPerKg: 1400
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
    caloriesPerKg: 650
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
    caloriesPerKg: 1800
  },{
    weight: 20,
    bestBefore: moment().add(2, 'week'),
    size: 5,
    xPos: 2,
    yPos: 1,
    zPos: 3,
    supplier: 'Tesco',
    receiver: 'NGO1',
    contains: 'Flour, Wheat, Fine',
    category: 'Flours',
    caloriesPerKg: 2100
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
    caloriesPerKg: 3300
  }
  ],

  model(){
    return this.fixtures.map(fixture => {
      return this.store.createRecord('package', fixture);
    });
  }
});
