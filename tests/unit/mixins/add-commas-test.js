import Ember from 'ember';
import AddCommasMixin from '../../../mixins/add-commas';
import { module, test } from 'qunit';

module('Unit | Mixin | add commas');

// Replace this with your real tests.
test('it works', function(assert) {
  var AddCommasObject = Ember.Object.extend(AddCommasMixin);
  var subject = AddCommasObject.create();
  assert.ok(subject);
});
