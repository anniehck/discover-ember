import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByMovement(param) {
      if (param !== '') {
        return this.get('store').query('artist', { movement: param });
      } else {
        return this.get('store').findAll('artist');
      }
    }
  }
});
