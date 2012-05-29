var users = new Meteor.Collection('users');

users.insert({
  firstName: 'Mario',
  lastName: 'Lombardo'
});

users.insert({
  firstName: 'Bob',
  lastName: 'Bannister'
});

User = Model.extend({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
});
Model.register('users', User);

Tinytest.add("mongo-hooks", function (test) {

  // Works with find()
  var user = _.first(users.find().fetch());
  var fullName = user.fullName();
  test.equal(fullName, 'Mario Lombardo');

  // Works with findOne()
  var user = users.findOne();
  var fullName = user.fullName();
  test.equal(fullName, 'Mario Lombardo');
  
  // Works with map()
  // var fullNames = users.find().map(function(user) {
  //   return user.fullName();
  // });
  // TODO make it work
  // test.equal(fullNames, ['Mario Lombardo', 'Bob Bannister']);

  // Works with forEach()
  // var fullNames = users.find().forEach(function(user) {
  //   var fullName = user.fullName();
  //   TODO make it work
  //   test.isTrue(_.contains(['Mario Lombardo', 'Bob Bannister'], user.FullName()));
  // });

  // Works with observe() TODO
});
