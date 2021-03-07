<template>
    <div>
        <header>
            <h3>{{username}}</h3>
        </header>
        <main>
            <p>{{todotext}}</p>
        </main>
        <footer>
            <button>Valider la todo</button>
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
    date: Date
  },
  computed: {
    intlDate: function() {
        dayjs.extend(relativeTime)
        const duration = dayjs(this.date).fromNow()

        return duration
      }
  }
};
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #cdcdcd;

        header {
            box-sizing: border-box;
            padding: 12px;

            h3 {
                color: #4b6652
            }
        }
    }
</style>
