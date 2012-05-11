Model = function() {};

Model._registered_models = {};

Model.register = function(name, model) {
  _.extend(model.prototype, this.prototype);
  this._registered_models[name] = model;

  return model;
};  
