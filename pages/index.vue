<script setup lang="ts">
definePageMeta({
  layout: 'app',
  middleware: ['app', 'app-check-login'],
});
useHead({
  title: 'Home',
});
const storeApp = useStoreApp();
// ----------------------------------------------------------------------------
</script>
<template>
  <div class="">
    <v-container class="bg-white">
      <div class="" style="display: flex">
        <v-btn color="primary" to="/login" class="ms-auto">logout</v-btn>
      </div>
      <test>AAAA</test>
      <div>
        {{ Hoge('fuge') }}
      </div>
    </v-container>
    <v-container class="bg-white mt-3">
      <div class="" style="display: flex">
        <v-btn color="primary" class="ms-auto" @click="storeApp.log('')">Log Push</v-btn>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss" scoped></style>
