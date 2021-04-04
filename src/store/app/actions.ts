import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AppStateInterface } from './state';

const actions: ActionTree<AppStateInterface, StateInterface> = {
  rightDrawer({ commit }, open) {
    commit('SET_RIGHT_DRAWER', open);
  },
};

export default actions;
