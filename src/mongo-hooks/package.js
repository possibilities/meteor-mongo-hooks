Package.describe({
  summary: "A hack for adding behavior to objects retrieved from Mongo by Meteor"
});

Package.on_use(function (api) {
  // Deps
  api.use('model-base', 'server');
  api.use('underscore', 'server');
  api.use('mongo-livedata', ['server', 'client']);

  // Core
  api.add_files('common.js', ['client', 'server']);
  api.add_files('server.js', 'server');
  api.add_files('client.js', 'client');
});

Package.on_test(function (api) {
  api.use('test-helpers', ['client', 'server']);

  api.add_files('tests/common.js', ['client', 'server']);
});
