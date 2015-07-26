/* jshint expr:true */
import { expect } from 'chai';
import {
  describe
} from 'mocha';
import {
  describeModule,
  it
} from 'ember-mocha';
import Ember from 'ember';

describeModule(
  'service:session',
  'SessionService',
  {
    // Specify the other units that are required for this test.
    needs: ['model:user']
  },
  function() {
    describe('isLoggedIn', function() {
      it('is true when the user exists', function() {
        let subject;
        Ember.run(this, function() {
          subject = this.subject({
            user: this.container.lookup('service:store').createRecord('user')
          });
        });

        expect(subject.get('isLoggedIn')).to.be.true;
      });

      it('is false when the user does not exist', function() {
        let subject = this.subject({
          user: null
        });

        expect(subject.get('isLoggedIn')).to.be.false;
      });
    });
  }
);
