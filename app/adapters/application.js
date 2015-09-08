import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api', //need this for mocks!
  host: 'http://knowplace.dev.mapc.org' //dev api
  // host: 'http://localhost:4200'
});

// DS.Store.reopen({
//     findOneQuery: function(type, id, query) {
//         var store = this;
//         var typeClass = store.modelFor(type);
//         var adapter = store.adapterFor(typeClass);
//         var serializer = store.serializerFor(typeClass);
//         var url = adapter.buildURL(type, id);
//         var ajaxPromise = adapter.ajax(url, 'GET', { data: query });

//         return ajaxPromise.then(function(rawPayload) {
//             var extractedPayload = serializer.extract(store, typeClass, rawPayload, id, 'find');
//             return store.push(typeClass, extractedPayload);
//         });
//     }
// });