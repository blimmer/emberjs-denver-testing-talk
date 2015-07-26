import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name:  faker.name.firstName,
  email: faker.internet.email
});
