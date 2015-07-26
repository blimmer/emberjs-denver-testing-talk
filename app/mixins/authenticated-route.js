import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),
  signInRoute: 'sign-in',

  beforeModel: function() {
    if (this.get('session.user')) {
      return;
    } else {
      this.replaceWith(this.get('signInRoute'));
    }
  }
});
