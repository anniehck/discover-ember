import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Leonardo Da Vinci', 'Pablo Picasso', 'Kandinsky', 'John Cage', 'Jeff Koons']
  }
});
