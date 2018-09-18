<template>
  <nav class="menu">
    <!-- Links here -->
    <router-link v-bind:to="{ name : 'home'}">Home</router-link>
    <router-link v-bind:to="{ name : 'faq'}">FAQ</router-link>
  </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style scoped>

</style>
