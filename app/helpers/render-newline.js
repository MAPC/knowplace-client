import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('render-newline', function (text) {
  text = Ember.Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  console.log(text);
  return new Ember.Handlebars.SafeString(text.replace(/\n/g, '<br>'));
});

