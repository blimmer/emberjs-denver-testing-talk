/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Acceptance: SignIn', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  describe('success', function() {
    beforeEach(function() {
      server.create('user', {
        email: 'hello@benlimmer.com',
        password: 'guest'
      });
    });

    it('transitions to the dashboard on successful login', function() {
      visit('/sign-in');
      click('button#sign-in-cta');

      andThen(function() {
        expect(currentPath()).to.equal('dashboard');
      });
    });

    it('shows a flash message on successful login', function() {
      visit('/sign-in');
      click('button#sign-in-cta');

      andThen(function() {
        expect(find('.alert-box.success').length).to.equal(1);
      });
    });
  });

  describe('failure', function() {
    beforeEach(function() {
      // API will return 400
      server.create('user', {
        email: 'notBen@gmail.com',
        password: 'guest'
      });
    });

    it('does not transition to the dashboard on failure', function() {
      visit('/sign-in');
      click('button#sign-in-cta');

      andThen(function() {
        expect(currentPath()).to.equal('sign-in');
      });
    });

    it('shows a danger flash message on login failure', function() {
      visit('/sign-in');
      click('button#sign-in-cta');

      andThen(function() {
        expect(find('.alert-box.danger').length).to.equal(1);
      });
    });
  });
});
