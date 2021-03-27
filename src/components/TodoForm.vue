<template>
  <div>
      <b-form @submit.prevent="postTodo">
          <b-form-group
            label="Add a todo"
            description="What's new today ?"
            label-for="addTodo"
            
          >
          <div class="d-flex justify-content-between">
               <b-form-input
                    id="addTodo"
                    v-model="handleTodo"
                    type="text"
                    placeholder="..."
                    required
                ></b-form-input>
                <button class="btn btn-primary" type="submit">
                    Add task
                </button>
          </div>
             
          </b-form-group>
      </b-form>
  </div>
</template>

<script>
import todos from '../api/todos'
import Cookies from 'js-cookie'
import store from '../store/index'

export default {
    name: "TodoForm",
    props: {
        todo: String
    },
    store,
    data() {
        return {
            handleTodo: this.todo
        }
    },
    methods: {
        postTodo: async function() {
            const req = await todos.postTodo({title: this.handleTodo, token: Cookies.get('token')})
            this.$store.dispatch('todos/POST_TODO', req)
            this.handleTodo = ''
        }
    }
}
</script>

<style scoped lang="scss">
    .btn {
        width: 150px;
        margin-left: 20px;
    }
</style>