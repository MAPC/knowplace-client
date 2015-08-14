import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Using Ember CLI to create a Fixture Adapter.",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        },
        {
            id: 2,
            title: "Ember is lots of fun",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        },
        {
            id: 3,
            title: "Ember, Node, Express and You!",
            author: "Ryan Christiani",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
        }
    ]
});
