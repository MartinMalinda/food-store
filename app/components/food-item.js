import Ember from 'ember';

const {computed} = Ember;

export default Ember.Component.extend({
  // tagName: '',
  classNames: ['food-item', 'ui', 'segment'],
  classNameBindings: ['selected:green'],

  isUrgent: computed('package.bestBefore', 'package.receiver', function(){
    return moment().diff(this.get('package.bestBefore'), 'days') < -5  && !this.get('package.receiver');
  }),

  click(){
    this.toggleProperty('selected');
    this.attrs.onClick(this.get('package'));
  }
});
