var users = new Meteor.Collection('users');

users.insert({
  firstName: 'Mario',
  lastName: 'Lombardo'
});

User = function() {};
Model.register('users', User);

User.prototype.fullName = function() { 
  return this.firstName + ' ' + this.lastName;
};

Tinytest.add("model-extensions", function (test) {
  // Works with find()
  var user = _.last(users.find().fetch());
  var fullName = user.fullName();
  test.equal(fullName, 'Mario Lombardo');

  // Works with findOne()
  var user = users.findOne();
  var fullName = user.fullName();
  test.equal(fullName, 'Mario Lombardo');
});
