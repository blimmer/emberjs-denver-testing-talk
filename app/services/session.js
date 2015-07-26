import Ember from 'ember';

export default Ember.Service.extend({
  user: null,

  isLoggedIn: Ember.computed.notEmpty('user')
});
