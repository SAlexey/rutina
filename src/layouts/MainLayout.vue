<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-drawer(v-model="rightDrawerOpen" side="right" behavior="mobile" elevated)
  q-page-container
    router-view
</template>
<script lang="ts">
import { StateInterface } from 'src/store';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();
    const rightDrawerOpen = computed({
      get: (): boolean => store.state.app.rightDrawerOpen,
      set: (val) => store.dispatch('app/rightDrawer', val),
    });
    return { rightDrawerOpen };
  },
});
</script>
