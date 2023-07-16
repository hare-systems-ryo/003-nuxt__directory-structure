<script setup lang="ts">
/* ----------------------------------------------------------------------------
layouts\app.vue
---------------------------------------------------------------------------- */
const state = reactive({
  drawer: false,
  group: null,
  items: [
    {
      title: 'Foo',
      value: 'foo',
    },
    {
      title: 'Bar',
      value: 'bar',
    },
    {
      title: 'Fizz',
      value: 'fizz',
    },
    {
      title: 'Buzz',
      value: 'buzz',
    },
  ],
});
</script>
<template>
  <div>
    <slot />
    <div class="bg-primary px-2 py-1" style="position: absolute; inset: auto auto 0 0">layout app</div>
  </div>
</template>
