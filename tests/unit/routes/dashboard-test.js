/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';
import AuthenticatedRouteMixin from 'tested-login-app/mixins/authenticated-route';

describeModule(
  'route:dashboard',
  'DashboardRoute',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('is an authenticated route', function() {
      var route = this.subject();
      expect(AuthenticatedRouteMixin.detect(route)).to.be.true;
    });
  }
);
