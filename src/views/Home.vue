<template>
  <div class="home">
    <section v-if="show" class="card-container">
      <card-todo
        class="card-todo"
        v-for="todo in todos"
        :todotext="todo.title"
        :username="todo.user.username"
        :date="new Date(todo.updatedAt)"
        :key="todo.id"
        :completed="todo.completed"
        @checked="checkTodo(todo)"
      />
    </section>
    <section v-else class="card-container">
      <p>Loading ...</p>
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import CardTodo from '../components/CardTodo.vue'
import TodoForm from '../components/TodoForm'
import { mapGetters } from "vuex"

export default {

  name: 'Home',
  data() {
    return{
      form: '',
    }
  },
  components: {
    CardTodo,
    TodoForm,
  },
  store,
  computed: {
    ...mapGetters('todos', {
      todos: 'todos',
      show: 'show'
    }),
  },
  methods: {
    checkTodo: function(todo) {this.$store.dispatch('todos/CHECK_TODO', todo)}
  },
  mounted() {
    this.$store.dispatch('todos/GET_USER_BY_TODO')
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
