<script setup lang="ts">
definePageMeta({
  layout: 'app',
  middleware: ['app', 'app-check-login'],
});
useHead({
  title: 'Home',
});

// ----------------------------------------------------------------------------
</script>
<template>
  <v-container class="">
    <v-btn color="primary" to="/login">Logout</v-btn>
  </v-container>
</template>

<style lang="scss" scoped></style>
