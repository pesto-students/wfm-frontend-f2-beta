import { combineReducers } from 'redux';

import { authentication } from '../reducers/authentication';
import { registration } from '../reducers/registrationreducer';
import { users } from '../reducers/usersreducers';
import { alert } from '../reducers/alertreducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;