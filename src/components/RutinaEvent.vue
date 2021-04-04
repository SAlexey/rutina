<template lang="pug">
q-item.rutina-event
  q-item-section
    .text-h6 why  this one ?
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: String,
    name: String,
    title: String,
  },
  setup() {
    return {};
  },
});
</script>
