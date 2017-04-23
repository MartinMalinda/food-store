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

  selectedItems: [],

  selectedWeight: sumBy('weight'),
  selectedCalories: sumBy('totalCalories'),
  selectedPortions: sumBy('portions'),

  foodBankView: false,



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
