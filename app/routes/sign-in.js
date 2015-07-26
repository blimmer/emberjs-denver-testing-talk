import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model: function() {
    return this.store.createRecord('user', {
      email: 'hello@benlimmer.com',
      password: 'guest'
    });
  },

  actions: {
    signIn: function(user) {
      const flashMessages = Ember.get(this, 'flashMessages');

      user.save().then(() => {
        this.set('session.user', user);
        this.replaceWith('dashboard');
        flashMessages.success('You\'re now logged in!');
      })
      .catch(() => {
        flashMessages.danger('We couldn\'t log you in!');
      });
    }
  }
});
