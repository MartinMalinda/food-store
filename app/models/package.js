import DS from 'ember-data';
import Ember from 'ember';

const {attr} = DS;
const {computed} = Ember;

export default DS.Model.extend({
  weight: attr(),
  bestBefore: attr(),
  size: attr(),
  xPos: attr(),
  yPos: attr(),
  supplier: attr(),
  receiver: attr(),
  contains: attr(),
  category: attr(),
  caloriesPerKg: attr('number'),


  urgency: attr(), // 1, 2, 3
  // urgency
  // calories

  totalCalories: computed('caloriesPerKg', 'weight', function(){
    return this.get('caloriesPerKg') * this.get('weight');
  }),

  portions: computed('totalCalories', function(){
    return this.get('totalCalories') / 2000;
  }),
});
