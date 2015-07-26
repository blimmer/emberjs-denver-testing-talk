/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'sign-in-form',
  'Integration: SignInFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#sign-in-form}}
      //     template content
      //   {{/sign-in-form}}
      // `);

      this.render(hbs`{{sign-in-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
