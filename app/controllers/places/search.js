import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  queryParams: ['q','page', 'perPage'],
  q: null,
  page: 1,
  perPage: 10,
  filteredContent: Ember.computed.filterBy('content', 'isCompleted', false),
  pagedContent: pagedArray('filteredContent'),
  pageBinding: "pagedContent.page",
  perPageBinding: "pagedContent.perPage"
});
