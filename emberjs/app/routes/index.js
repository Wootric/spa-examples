import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Great Pyramid of Giza' },
      { name: 'Hanging Gardens of Babylon' },
      { name: 'Statue of Zeus at Olympia' },
      { name: 'Temple of Artemis' },
      { name: 'Mausoleum at Halicarnassus' },
      { name: 'Colossus of Rhodes' },
      { name: 'Lighthouse of Alexandria' }
    ];
  }
});
