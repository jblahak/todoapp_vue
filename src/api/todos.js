export default {
    getTodos: async (state) => {
        const data = await fetch('http://localhost:4443/api/todos');
        const res = await data.json();
        return await res;
    }
}