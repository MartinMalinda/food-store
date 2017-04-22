import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: '',
  classNames: ['food-item', 'ui', 'segment'],
  classNameBindings: ['selected:green'],

  click(){
    this.toggleProperty('selected');
    this.attrs.onClick(this.get('package'));
  }
});
