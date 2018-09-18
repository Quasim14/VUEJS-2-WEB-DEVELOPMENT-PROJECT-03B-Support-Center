<template>
  <nav class="menu">
    <!-- Links here -->
    <router-link v-bind:to="{ name : 'home'}"exact>Home</router-link>
    <router-link v-bind:to="{ name : 'faq'}">FAQ</router-link>
  </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style lang="stylus" scoped>
  @import '../style/imports';
  .router-link-active {
    border-bottom-color: $primary-color;
  }



</style>
