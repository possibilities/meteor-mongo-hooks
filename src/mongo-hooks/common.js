Model.register = function(name, model) {
  this._registered_models || (this._registered_models = {});
  this._registered_models[name] = model;
  return model;
};
