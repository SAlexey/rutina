import { MutationTree } from 'vuex';
import { AppStateInterface } from './state';

const mutation: MutationTree<AppStateInterface> = {
  SET_RIGHT_DRAWER(state, open: boolean) {
    state.rightDrawerOpen = open;
  },
};

export default mutation;
