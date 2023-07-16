/* ----------------------------------------------------------------------------
  middleware/app
---------------------------------------------------------------------------- */

// [  ]
// ----------------------------------------------------------------------------
export default defineNuxtRouteMiddleware((to, from) => {
  // const storeApp = useStoreApp();
  console.log('middleware app', to.path);
  // 強制遷移
  // return navigateTo('/');
});
