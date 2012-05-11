var widgets = new Meteor.Collection('widgets');

widgets.insert({
  widgetName: 'widget1'
});

Widget = function() {};
Model.register('widgets', Widget);

Widget.prototype.modelMethod = function() { 
  return this.widgetName;
};

Tinytest.add("model-extensions", function (test) {
  // Works with find()
  var widget = _.last(widgets.find().fetch());
  var resultOfModelMethod = widget.modelMethod();
  test.equal(resultOfModelMethod, 'widget1');

  // Works with findOne()
  var widget = widgets.findOne();
  var resultOfModelMethod = widget.modelMethod();
  test.equal(resultOfModelMethod, 'widget1');
});
