<template>
    <div>
        <header>
            <h3>
                <span></span>
                {{todotext}}
            </h3>
        </header>
        <main>
            <p>{{username}}</p>
        </main>
        <footer>
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
    @import '../scss/main.scss';

    div {
        width: 100%;
        margin-bottom: 10px;
        border-radius: $radius;
        box-shadow: $shadow-primary;
        padding: 15px;

        header {
            box-sizing: border-box;

            h3 {
                color: $black;
                text-align: left;
                position: relative;
                padding-left: 15px;

                span {
                    position: absolute;
                    height: 6px;
                    width: 6px;
                    background-color: $primary;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                }
            }
        }

        main {
            p {
                text-align: left;
                color: $black;
            }
        }

        footer {
            p {
                text-align: right;
                color: $gray;
                font-size: 10px;
            }
        }
    }
</style>
