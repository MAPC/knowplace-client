import { moduleForModel, test } from 'ember-qunit';

moduleForModel('place', 'Unit | Serializer | place', {
  // Specify the other units that are required for this test.
  needs: ['serializer:place']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
