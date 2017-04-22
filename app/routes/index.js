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
    contains: 'Egg',
    category: 'Dairy',
    caloriesPerKg: 2800
  }
  ],

  model(){
    return this.fixtures.map(fixture => {
      return this.store.createRecord('package', fixture);
    });
  }
});
