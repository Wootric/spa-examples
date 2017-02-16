import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wootric-survey', 'Integration | Component | wootric survey', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{wootric-survey}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#wootric-survey}}
      template block text
    {{/wootric-survey}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
