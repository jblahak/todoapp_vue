<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <card-todo
    v-for="todo in alltodos"
    :todotext="todo.title"
    :username="JSON.stringify(todo.UserId)"
    :date="new Date(todo.updatedAt)"
    :key="todo.id"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import store from '@/store/index';
import CardTodo from '../components/CardTodo.vue';

export default {
  name: 'Home',
  components: {
    CardTodo,
  },
  store,
  data() {
    return {
      
    };
  },
  mounted: () => {
  },
  watch: {
  },
  methods: {
  },
  computed: {
    alltodos() {
      return this.$store.state.todos
    }
  },
  async created() {
    this.$store.dispatch('todos').then( response => console.log('ok'))
  }
};
</script>
