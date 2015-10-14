import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (est,moe) {
  var pct = moe / est;
  console.log(pct);
  var threshholds = {
    green: 0.15,
    orange: 0.30
  }

  if (pct < threshholds.green) {
    return "green";
  }

  if (pct > threshholds.green && pct <= threshholds.orange) {
    return "orange";
  }

  if (pct > threshholds.orange) {
    return "red";
  }
});
