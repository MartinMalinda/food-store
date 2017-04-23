import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  stores: computed('model.[]', function(){
    return this.get('model').mapBy('supplier').uniq();
  }),

  series: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    series: [[100, 95, 100, 92, 90, 92, 80, 70, 75, 75, 80, 70]]
  }
});
