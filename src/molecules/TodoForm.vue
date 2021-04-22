<template>
  <div>
    <form @submit.prevent="postTodo">
        <div>
            <text-input class="title" :name="'title'" :placeholder="'Title'"/>
            <text-area-icon :name="'description'" :icon="'justify-left'" :placeholder="'Description'"/>
            <div class="btnForm">
                <link-btn :message="'Add task'" :route="'go'"/>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import todos from '../api/todos'
import Cookies from 'js-cookie'
import store from '../store/index'

import TextInput from '../atoms/TextInput'
import TextAreaIcon from '../atoms/TextAreaIcon.vue'
import LinkBtn from '../atoms/LinkBtn.vue'

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
    },
    components: {
        TextInput,
        TextAreaIcon,
        LinkBtn,
    }
}
</script>

<style scoped lang="scss">
    form {
        .title {
            width: 70%;
            margin-bottom: 20px;
        }


        .btnForm {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;

            button {
                width: 50%;
            }
        }
    }
</style>