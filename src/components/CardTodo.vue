<template>
    <div>
        <header>
            <h3>{{username}}</h3>
        </header>
        <main>
            <p>{{todotext}}</p>
        </main>
        <footer>
            <button class="btn btn-success" v-if="completed === false" @click="checkTodo">Valider la todo</button>
            <button class="btn btn-danger" v-else @click="checkTodo">Uncheck</button>
            <p>{{intlDate}}</p>
        </footer>
    </div>
</template>

<script>
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';


export default {
  name: 'CardTodo',
  props: {
    username: String,
    todotext: String,
    completed: Boolean,
    date: Date
  },
  computed: {
    intlDate: function() {
        dayjs.extend(relativeTime)
        const duration = dayjs(this.date).fromNow()

        return duration
      }
  },
  methods: {
      checkTodo: function() {
          this.$emit("checked")
      } 
  }
};
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #cdcdcd;
        width: calc((100% / 3) - 20px);
        margin-bottom: 10px;

        header {
            box-sizing: border-box;
            padding: 12px;

            h3 {
                color: #4b6652
            }
        }
    }
</style>
