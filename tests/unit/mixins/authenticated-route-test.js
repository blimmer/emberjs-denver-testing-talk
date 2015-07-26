/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'tested-login-app/mixins/authenticated-route';

describe('AuthenticatedRouteMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var AuthenticatedRouteObject = Ember.Object.extend(AuthenticatedRouteMixin);
    var subject = AuthenticatedRouteObject.create();
    expect(subject).to.be.ok;
  });
});
