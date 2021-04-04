<template lang="pug">
q-item.rutina-list-item(:to="{path: rutina.id, name: 'rutina', params: {'id': rutina.id, 'rutina': rutina}}" v-touch-hold.mouse="toggleSelect")
  q-item-section(left top v-show="selecting")
    q-checkbox(v-model="selected")
  q-item-section
    .title {{ rutina.title }}
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Rutina } from './models';

export default defineComponent({
  props: {
    rutina: { type: Object as PropType<Rutina>, required: true },
  },
  setup(props) {
    console.log(props.rutina);
    const selecting = ref(false);
    const selected = ref(false);
    const toggleSelect = () => {
      selecting.value = !selecting.value;
    };
    return { toggleSelect, selected, selecting };
  },
});
</script>
<style lang="sass" scoped>
.rutina-list-item
  height: 64px
</style>
