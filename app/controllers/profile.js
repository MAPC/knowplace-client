import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['include'],
  include: "place",
  evaluated: {
    "data": [
      {
        "id":   "1",
        "type": "evaluated-data-point",
        "attributes": {
          "title":      "College Educated Adults",
          "modifier":   "total", 
          "aggregator": "sum",
          "value":      1176,
          "margin":     12
        }
      },
      {
        "id":   "1",
        "type": "evaluated-data-collection",
        "attributes": {
          "title": "Population Information"
        },
        "relationships": {
          "data-points": {
            "data": [
              {
                "id":   "2",
                "type": "evaluated-data-point",
                "attributes": {
                  "title":      "Population",
                  "modifier":   "total", 
                  "aggregator": "sum",
                  "value":      200491,
                  "margin":     127
                }
              },
              {
                "id":   "3",
                "type": "evaluated-data-point",
                "attributes": {
                  "title":      "One Race",
                  "modifier":   "total", 
                  "aggregator": "sum",
                  "value":      100129,
                  "margin":     36
                }
              }
            ]
          }
        }
      },
      {
        "id":   "4",
        "type": "evaluated-data-point",
        "attributes": {
          "title":      "High-School Educated Adults",
          "modifier":   "total", 
          "aggregator": "sum",
          "value":      17491,
          "margin":     85
        }
      }
    ]
  }
});
