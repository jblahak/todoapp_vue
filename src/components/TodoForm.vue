<template>
  <div>
      <b-form>
          <b-form-group
            label="Add a todo"
            description="What's new today ?"
            label-for="addTodo"
          >
              <b-form-input
                id="addTodo"
                v-model="handleTodo"
                type="text"
                placeholder="..."
                required
              ></b-form-input>
          </b-form-group>
      </b-form>
  </div>
</template>

<script>
export default {
    name: "TodoForm",
    props: {
        todo: String
    },
    data() {
        return {
            handleTodo: this.todo
        }
    }
}
</script>