import Ember from 'ember';

const {computed} = Ember;

const sumBy = function(prop){
  return computed(`selectedItems.@each.${prop}`, function(){
    return this.get('selectedItems').reduce((prev, next) => {
      return prev + parseInt(next.get(prop));
    }, 0);
  });
}

export default Ember.Controller.extend({
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
  selectedItems: [],

  selectedWeight: sumBy('weight'),
  selectedCalories: sumBy('totalCalories'),
  selectedPortions: sumBy('portions'),

  foodBankView: false,

  groupedOptions: computed(function(){
    return [{
      groupName: 'categories',
      options: this.get('categories')
    },{
      groupName: 'recipes',
      options: this.get('recipes')
    }];
  }),

  filteredPackages: computed('model.@each.category', 'filterByValue.[]', function(){
    // return this.get('model').filter(package => {
    //   return this.get('filterByValue').includes(package.get('category'));
    // });

    if(this.get('filterByValue.length')){ 
      return this.get('model').filter(packageModel => {
        return this.get('filterByValue').includes(packageModel.get('category'));
      });
    }

    return this.get('model');

  }),

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
