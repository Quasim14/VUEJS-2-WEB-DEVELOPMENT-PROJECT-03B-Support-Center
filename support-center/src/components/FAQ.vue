<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>

    <div class="error" v-if="hasRemoteErrors">
      Can't load the questions
    </div>

    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
    <Loading v-if="remoteDataBusy" />

  </main>

</template>

<script>
  import RemoteData from '../mixins/RemoteData'

    export default {
      name: "Faq",
      mixins:[RemoteData({
        questionList: 'questions',
      }),
      ],

      // async created(){
      //   this.loading = true
      //   try{
      //     this.questions = await this.$fetch('questions')
      //   }
      //   catch(e){
      //     this.error = e
      //   }
      //   this.loading = false
      // },
    }
</script>


<style scoped>

</style>
