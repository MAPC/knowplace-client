import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  queryParams: ['q','page'],
  q: null,
  page: 1,
  perPage: 10,
  filteredContent: Ember.computed.filterBy('content', 'isCompleted', false),
  pagedContent: pagedArray('filteredContent'),
  pageBinding: "pagedContent.page",
  perPageBinding: "pagedContent.perPage"
  // totalPagesBinding: "pagedContent.totalPages"
  // queryParams: ["page","perPage"],
  // pageBinding: "content.page",
  // perPageBinding: "content.perPage",
  // totalPagesBinding: "content.totalPages",
  // totalPagesBinding: "content.totalPages",

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  // page: 1,
  // perPage: 10
});
