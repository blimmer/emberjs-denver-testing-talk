/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'sign-in-form',
  'Integration: SignInFormComponent',
  {
    integration: true
  },
  function() {
    it('shows the user\'s email address', function() {
      this.set('user', Ember.Object.create({
        email: 'foo@bar.com'
      }));

      this.render(hbs`{{sign-in-form user=user}}`);
      expect(this.$('#sign-in-greeting').text()).to.contain('foo@bar.com');
    });

    it('has a button to login', function() {
      this.render(hbs`{{sign-in-form}}`);
      expect(this.$('button#sign-in-cta').length).to.equal(1);
    });

    it('sends the login action with the user when clicking the button', function(done) {
      const user = Ember.Object.create({
        email: 'foo@bar.com'
      });
      this.set('user', user);
      this.on('signIn', function(actionUser) {
        expect(actionUser).to.equal(user);
        done();
      });

      this.render(hbs`{{sign-in-form user=user signIn='signIn'}}`);
      this.$('button#sign-in-cta').click();
    });
  }
);
