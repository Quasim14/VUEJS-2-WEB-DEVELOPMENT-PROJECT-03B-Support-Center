<template>
  <main class="tickets-layout">
    <h1>Your Support tickets</h1>
    <!-- TODO -->
    <Tickets />
  </main>

</template>

<script>
  import Tickets from './Tickets.vue'
    export default {
        name: "TicketsLayout",
      components: {
        Tickets,
      }
    }
</script>

<style scoped>

</style>
