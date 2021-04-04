<template lang="pug">
q-item.rutina-event-list-item
  q-item-section(left)
    p title:  {{ event.title }}
    p duration: {{event.duration}}
  q-item-section(top)
    p start: {{ event.signalOnStart.name }}
    p exec: {{ event.signalOnExec.name }}
    p end: {{ event.signalOnEnd.name }}
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RutinaEvent } from './models';

export default defineComponent({
  props: {
    event: { type: Object as PropType<RutinaEvent>, required: true },
  },
  setup() {
    console.log('hey');
    return {};
  },
});
</script>
<style lang="sass" scoped></style>
