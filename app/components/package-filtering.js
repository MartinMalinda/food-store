import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
  categories: ['', 'Vegetables', 'Dairy', 'Meat', 'Fruits', 'Oils', 'Flours'],
  recipes: [{
    name: 'Goulash',
    ingredients: ['Onions', 'Flour - Wheat - Fine', 'Meat - Beef']
  },{
    name: 'Leco',
    ingredients: ['Eggs', 'Sunflower Oil', 'Tomatoes', 'Bell Peppers']
  },{
    name: 'Chinese',
    ingredients: ['Meat - Beef', 'Rice', 'Bell Peppers']
  }],

  groupedOptions: computed(function(){
  return [{
    groupName: 'categories',
    options: this.get('categories')
  },{
    groupName: 'recipes',
    options: this.get('recipes').mapBy('name')
  }];
}),
});
