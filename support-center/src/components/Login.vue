<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <form>
      <FormInput name="username" v-model="username" placeholder="Username" />
    </form>
  </main>

</template>

<script>
    export default {
      name: "Login",

      data(){
        return {
          username: '',
        }
      },
      methods:{
        update(event){
          this.$emit('update', event.currentTarget.value)
        },
      },


    }
</script>

<style scoped>

</style>
