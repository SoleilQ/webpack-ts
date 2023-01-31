import { CurrentUser } from './types';

interface State {
  currentUser: CurrentUser;
}

export const initialState: State = {
  currentUser: {},
};
