LocalCollection.Cursor.prototype._fetch_base = LocalCollection.Cursor.prototype.fetch;
LocalCollection.Cursor.prototype.fetch = function() {
  var self = this;
  var docs = LocalCollection.Cursor.prototype._fetch_base.apply(this, arguments);

  var collection_name = Meteor.is_client ? this.collection.collection_name : this.collection_name;

  if (Model._registered_models && _.contains(_.keys(Model._registered_models), collection_name)) {
    return _.map(docs, function(doc) {
      _.extend(doc, Model._registered_models[collection_name].prototype);
      return doc;
    });
  } else {
    return docs;
  }
};

Meteor._LocalCollectionDriver._open_base = Meteor._LocalCollectionDriver.open;
Meteor._LocalCollectionDriver.open = function() {
  var collection = Meteor._LocalCollectionDriver._open_base.apply(this, arguments);
  collection.collection_name = arguments[0];
  return collection;
};
