import Ember from 'ember';
import ResetScrollMixin from 'neighborhood-drawing-tool/mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  model: function(params) {
    return this.store.find("profile", params.profile_id);
  }
});
