import Ember from 'ember';

let artists = [{
    name: 'Leonardo Da Vinci',
    nationality: 'Italian',
    movement: 'Italian Classical',
    timePeriod: '16th c.',
    alive: false
  }, {
    name: 'Kandinsky',
    nationality: 'Russian',
    movement: 'Early Modernism',
    timePeriod: 'Early 20th c.',
    alive: false
  }, {
    name: 'John Cage',
    nationality: 'American',
    movement: 'Post-Modern/Contemporary',
    timePeriod: '1970s+',
    alive: false
  }, {
    name: 'Jeff Koons',
    nationality: 'American',
    movement: 'Contemporary',
    timePeriod: '21st c.',
    alive: true
  }, {
    name: 'William J Turner',
    nationality: 'British',
    movement: 'Expressionist',
    timePeriod: 'Late 19th c.',
    alive: false
  }];

export default Ember.Route.extend({
  model() {
    return artists;
  }
});
