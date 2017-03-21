<template lang="html">
  <div class="row">
    <div class="card" v-for="question in questions">
      <div class="card-block">
        <h4 class="card-title">{{ question.title }}</h4>
        <p class="card-text">{{ question.question_content }}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    <!-- <div v-for="question in questions" class="col-md-12">
      <p> Title : {{ question.title }}</p>
      <p> Question : {{ question.question_content }}</p>
      <p v-for="answer in question.Answers"> Answer : {{ answer.answer_content }}</p> -->
      <!-- <p v-for="vote in question.Answers"> Vote : {{ vote }}</p> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      questions: []
    }
  },
  methods: {
    getData() {
      let self = this;
      axios.get('http://localhost:3000/api/questions')
        .then((response) => {
          console.log(response);
          self.questions = response.data
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="css">
</style>
