<template>
  <div class="home">
    
    <board-task 
      :show="show"
      :todos="todos.openTodos"
      :title="'To do'"
    />
    <board-task
      :show="show"
      :todos="todos.doingTodos"
      :title="'In progress'"
    />
    <board-task
    :show="show"
      :todos="todos.closedTodos"
      :title="'Completed'"
    />
  </div>
</template>

<script>
import store from '@/store/index'
import CardTodo from '../components/CardTodo.vue'
import BoardTask from '../components/BoardTask'
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
    BoardTask
  },
  store,
  computed: {
    ...mapGetters('todos', {
      todos: 'todos',
      show: 'show'
    }),
  },
  mounted() {
    this.$store.dispatch('todos/GET_USER_BY_TODO')
  }
};
</script>

<style lang="scss">
  .home {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .card-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
</style>
