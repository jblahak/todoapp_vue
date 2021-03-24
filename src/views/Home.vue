<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <section class="card-container">
      <card-todo
        class="card-todo"
        v-for="todo in todos"
        :todotext="todo.title"
        :username="JSON.stringify(todo.UserId)"
        :date="new Date(todo.updatedAt)"
        :key="todo.id"
        :completed="todo.completed"
        @checked="checkTodo(todo)"
      />
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import CardTodo from '../components/CardTodo.vue'
import { mapActions, mapGetters, mapState } from "vuex"

export default {

  name: 'Home',
  components: {
    CardTodo,
  },
  store,
  computed: {
    ...mapGetters('todos', {
      todos: 'todos'
    })
  },
  methods: {
    checkTodo: function(todo) {this.$store.dispatch('todos/CHECK_TODO', todo)}
  },
  async mounted() {
    this.$store.dispatch('todos/GET_ALL_TODOS')
  }
};
</script>

<style lang="scss">
  .card-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>
