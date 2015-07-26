import Ember from 'ember';
import AuthenticatedRouteMixin from 'tested-login-app/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  model: function() {
    return this.get('session.user');
  }
});
