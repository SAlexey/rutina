<template lang="pug">
q-list
  rutina-event-list-item(v-for="event in events" :event="event")
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RutinaEventListItem from './RutinaEventListItem.vue';
import { RutinaEvent } from './models';
export default defineComponent({
  props: {
    events: { type: Object as PropType<RutinaEvent[]> },
  },
  components: { RutinaEventListItem },
  setup() {
    console.log('heyhey');
    return {};
  },
});
</script>
