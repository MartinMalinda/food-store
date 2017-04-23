import Ember from 'ember';

const {computed} = Ember;

const sumBy = function(prop){
  return computed(`selectedItems.@each.${prop}`, function(){
    return this.get('selectedItems').reduce((prev, next) => {
      return prev + next.get(prop);
    }, 0);
  });
}

export default Ember.Controller.extend({
  categories: ['', 'Vegetables', 'Dairy', 'Meat', 'Fruits'],
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
  selectedItems: [],

  selectedWeight: sumBy('weight'),
  selectedCalories: sumBy('totalCalories'),
  selectedPortions: sumBy('portions'),

  foodBankView: false,

  actions: {
    selectItem(item){
      const items = this.get('selectedItems');
      if(items.includes(item)){
        items.removeObject(item);
      } else {
        items.pushObject(item);
      }
    }
  }
});
