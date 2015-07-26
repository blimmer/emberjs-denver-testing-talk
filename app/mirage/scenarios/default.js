export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.create('user', {
    name: 'Ben',
    email: 'hello@benlimmer.com',
    password: 'guest'
  });
}
