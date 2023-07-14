<template>
  <div>
    <router-view />
    <!-- <WelcomeUser /> -->
  </div>
</template>

<script>
// import WelcomeUser from "../src/pages/WelcomeUser.vue";

export default {
  name: "App",
  // components: {
  //   WelcomeUser,
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
