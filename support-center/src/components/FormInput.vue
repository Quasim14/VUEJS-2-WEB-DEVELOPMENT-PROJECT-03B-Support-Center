<template>
  <div class="row">
    <input class="input"
           :class="inputClass"
           :name="name" :type="type"
           :value="text"
           :placeholder="placeholder"
    />
  </div>
</template>

<script>
  export default {
    props: {
      name:{
        type: String,
      },
      type:{
        type: String,
        default: 'text',
      },
      text:{
        required: true,
      },
      placeholder:{
        type: String,
      },
      invalid: {
        type: Boolean,
        default: false,
      },
    },

    computed:{
      inputClass(){
        return {
          'invalid': this.invalid,
        }
      },
    },

    model: {
      prop: 'text',
      event: 'update',
    },


  }
</script>

<style scoped>

</style>
