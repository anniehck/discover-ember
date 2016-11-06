import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleDetails() {
      this.toggleProperty('isExpanded');
    }
  }
});
