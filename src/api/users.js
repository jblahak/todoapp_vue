export default {
    loginUser: async (user) => {
        const data = await fetch('http://localhost:4443/api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user.email, password: user.password})
        });
        const res = await data.json();
        return await res;
    },
    getUser: async (user) => {
        const data = await fetch('http://localhost:4443/api/users/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xxx-form-urlencoded',
                'authorization': `Bearer ${user}`
            }
        })
        const res = await data.json()
        return await res
    }
}