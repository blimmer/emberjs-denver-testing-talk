import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn: function() {
      this.sendAction('signIn', this.get('user'));
    }
  }
});
