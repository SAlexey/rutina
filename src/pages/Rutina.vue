<template lang="pug">
.rutina.col
  q-tabs(v-model="tab" dark dense inline-label align="justify")
    q-tab(name="detail" icon="description" label="Detail")
    q-tab(name="events" icon="alarm" label="Events")
    q-tab(name="settings" icon="settings" label="Settings")
  q-tab-panels(v-model="tab" animated)
    q-tab-panel(name="detail")
      p {{ rutina.title }}
      p {{ rutina.id }}

    q-tab-panel(name="events")
      rutina-event-list(v-show="rutina.events.length" :events="rutina.events")
      p(v-show="rutina.events.length === 0")
        | currently no events in this rutina
    q-tab-panel(name="settings")
      p whatever

  q-btn-group(spread)
    q-btn(label="Run" icon="play_arrow" @click.prevent="runRutina")
    q-btn(label="Delete" icon="delete" @click.prevennt="deleteRutina")
</template>
<script lang="ts">
import { defineComponent, toRef, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { StateInterface } from 'src/store';
import RutinaEventList from 'components/RutinaEventList.vue';

type TabChoice = 'detail' | 'events';

export default defineComponent({
  props: {
    id: String,
  },
  components: { RutinaEventList },
  setup(props) {
    const id = toRef(props, 'id');
    const store = useStore<StateInterface>();
    const router = useRouter();
    const rutina = store.state.app.rutinas.find((it) => it.id === id.value);
    const tab = ref<TabChoice>('detail');

    const runRutina = () => {
      console.log('will run: ', rutina);
    };

    const saveRutina = () => {
      console.log('will save: ', rutina);
    };

    const deleteRutina = () => {
      console.log('will delete: ', rutina);
    };

    if (!rutina) {
      void router.push('objectNotFound');
    } else {
      return { rutina, runRutina, saveRutina, deleteRutina, tab };
    }
  },
});
</script>
<style lang="sass" scoped>
.rutina
  height: 100%
.rutina-event-list
</style>
