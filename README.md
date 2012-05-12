# Model Extensions for Meteor

A dead simple way to add behavior to objects retrieved from Mongo by Meteor

## Installation

First download it and add it to your Meteor packages.

Now add it to your app

    meteor add user-sessions

## Usage

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

    // Works with find()
    var user = _.last(users.find().fetch());
    var fullName = user.fullName();
    test.equal(fullName, 'Mario Lombardo');

    // Works with findOne()
    var user = users.findOne();
    var fullName = user.fullName();
    test.equal(fullName, 'Mario Lombardo');

## TODO

Client stubb for internal methods

Clear stuff add to context by injectSessionToRemoteMethodCalls, but not until after all the middleware has been run (if possible)

Maybe it's possible to use inject/load of session ID on internal methods

Add some acceptance tests to avoid overhead of little changes
