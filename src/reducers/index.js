import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import accounts from './accounts';
import panel from './panel';
import cards from './cards';
import messages from './messages';
import profile from './profile';
import transactions from './transactions';
import modal from './modal';

export default history =>
   combineReducers({
      router: connectRouter(history),
      auth,
      accounts,
      panel,
      cards,
      messages,
      profile,
      transactions,
      modal
   });
