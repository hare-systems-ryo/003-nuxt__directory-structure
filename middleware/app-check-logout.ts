export default defineNuxtRouteMiddleware((to, from) => {
  try {
    console.log('middleware app-check-logout');
  } catch (e: any) {
    console.error(e);
  }
  // return navigateTo(`/login?redirect=${to.fullPath}`);
});
