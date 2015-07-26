/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it,
  beforeEach
} from 'mocha';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'tested-login-app/mixins/authenticated-route';
import sinon from 'sinon';

describe('AuthenticatedRouteMixin', function() {
  describe('beforeModel', function() {
    const signInRoute = 'sign-in';

    let subject, replaceWithStub, session;
    beforeEach(function() {
      const AuthenticatedRouteObject = Ember.Object.extend(AuthenticatedRouteMixin);

      replaceWithStub = sinon.stub();
      session = Ember.Object.create();

      subject = AuthenticatedRouteObject.create({
        session: session,
        signInRoute: signInRoute,
        replaceWith: replaceWithStub
      });
    });

    it('does nothing if the session\'s user exists', function() {
      session.set('user', Ember.Object.create({
        name: 'Ben',
        email: 'foo@bar.com'
      }));

      subject.beforeModel();

      expect(replaceWithStub.called).to.be.false;
    });

    it('transitions to the sign in route if the user does not exist', function() {
      session.set('user', null);

      subject.beforeModel();

      expect(replaceWithStub.withArgs(signInRoute).calledOnce).to.be.true;
    });
  });
});
