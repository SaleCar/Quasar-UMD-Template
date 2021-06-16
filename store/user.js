export const user = Vue.reactive({

    name: null,
    email: null,
    token: null,


    //login dialog
    loginDialog: {
        show: null,
        loading: null,
        email: null,
        password: null,
        pwdVisible: null,
        reset: () => {
            user.loginDialog.show = user.loginDialog.loading = user.loginDialog.email = user.loginDialog.password = user.loginDialog.pwdVisible = null
        }
    },


    //login user to server
    login: () => {
        if (user.loginDialog.email != 'admin@test.com' || user.loginDialog.password != 'admin') return null
        const res = {
            name: 'Jane Smith',
            email: 'admin@test.com',
            token: 'a9bedabb5f8f6432'
        }
        Object.assign(user, res)
        localStorage.setItem('user', JSON.stringify(res))
        user.loginDialog.reset()
        return 'ok'
    },


    logout: () => {
        user.reset()
        localStorage.removeItem('user')
        if (Vue.$router.currentRoute.value.path != '/') Vue.$router.push('/')
    },


    reset: () => {
        user.name = user.email = user.token = null
    }
        
})