<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['app', 'app-check-logout'],
});
useHead({
  title: 'Login',
});
// ----------------------------------------------------------------------------
</script>
<template>
  <div class="">
    <v-container class="bg-white">
      <div>〇〇アプリ ログイン</div>
      <v-btn color="primary" to="/">Login</v-btn>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
