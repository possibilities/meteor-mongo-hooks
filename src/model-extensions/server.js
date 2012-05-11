_Mongo.Cursor.prototype._fetch_base = _Mongo.Cursor.prototype.fetch;
_Mongo.Cursor.prototype.fetch = function() {
  var self = this;
  var docs = _Mongo.Cursor.prototype._fetch_base.apply(this, arguments);

  if (Model._registered_models && _.contains(_.keys(Model._registered_models), this.collection_name)) {
    return _.map(docs, function(doc) {
      _.extend(doc, Model._registered_models[self.collection_name].prototype);
      return doc;
    });
  } else {
    return docs;
  }
};
