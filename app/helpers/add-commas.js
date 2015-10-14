import Ember from 'ember';
import add_commas from 'npm:add-commas';
import isNumber from 'npm:is-number';

export default Ember.Handlebars.makeBoundHelper(function (num) {
  return (isNumber(num) && num >= 1) ? add_commas(num) : num;
});