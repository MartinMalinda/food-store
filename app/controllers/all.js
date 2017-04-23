import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
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
});
