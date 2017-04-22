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
  selectedItems: [],

  selectedWeight: sumBy('weight'),
  selectedCalories: sumBy('totalCalories'),
  selectedPortions: sumBy('portions'),

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
