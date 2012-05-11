Package.describe({
  summary: "A lib for adding behavior to Meteor's Mongo models"
});

Package.on_use(function (api) {
  api.use('underscore', 'server');
  api.use('mongo-livedata', ['server', 'client']);

  api.add_files('common.js', ['client', 'server']);
  api.add_files('server.js', 'server');
  api.add_files('client.js', 'client');
});

Package.on_test(function (api) {
  api.use('test-helpers', ['client', 'server']);

  api.add_files('tests/common.js', ['client', 'server']);
});
