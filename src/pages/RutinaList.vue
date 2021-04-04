<template lang="pug">
q-page
  .row
    .col-12
      .list-container
        .text-h6.text-center My Rutinas
        q-list.rutina-list(v-show="rutinas.length !== 0" separator)
          rutina-list-item(v-for="rutina in rutinas" :rutina="rutina")
        q-btn-group(spread=true)
          q-btn(label="create" icon="add")
          q-btn(label="select" icon="checkbox")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import RutinaListItem from 'components/RutinaListItem.vue';
import { useStore } from 'vuex';
import { StateInterface } from 'src/store';
export default defineComponent({
  components: { RutinaListItem },
  setup() {
    const store = useStore<StateInterface>();
    const rutinas = computed(() => store.state.app.rutinas);
    return { rutinas };
  },
});
</script>
<style lang="sass" scoped>
.list-container
  align-self: stretch
.rutina-list
  height: 100%
</style>
