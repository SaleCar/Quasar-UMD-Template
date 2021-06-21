import layout_adm from '/layout/admin.js'       //admin backend layout (header and drawer)
import layout_lnd from '/layout/landing.js'     //landing layout (header and drawer)
import landing from '/pages/landing.js'         //landing page (sections)
import login from '/components/login.js'        //login dialog
import {user} from '/store/user.js'             //user state


//router
import router from '/router.js'
router.beforeEach(async (to, from) => {
    if (to.path == '/') return true
    //no match - goto root
    if (!to.matched.length) {to.fullPath = '/'; return true}
    //if not logged -> login dialog
    if (!user.token) {
        setTimeout(function() {user.loginDialog.show = true}, 200)
        await user.token
    }
})
Vue.$router = router



const app = Vue.createApp({
    components: {
        'layout-adm':layout_adm, 
        'layout-lnd':layout_lnd, 
        'landing-page':landing, 
        'login-dialog':login
    },

    setup() {
        const {onMounted} = Vue
        const $q = Quasar.useQuasar()

        onMounted(async() => {
            //auto dark mode
            $q.dark.set('auto')

            //load user from localstorage   
            Object.assign(user, JSON.parse(localStorage.getItem('user')))
        })        
            
        return {user}
    },

    template: `
        <q-layout view="hHh LpR fFf">                             
            <!-- Layout (Header and Drawer) -->
            <layout-adm v-if="user.token"></layout-adm>                        
            <layout-lnd v-if="!user.token"></layout-lnd>
                
            <!-- Main content -->
            <q-page-container>
                <q-page class="row">
                    <div class="col">
                        <div class="column full-height">
                            <q-scroll-area class="col">
                                <router-view v-if="user.token"></router-view>
                                <landing-page v-if="!user.token"></landing-page>
                            </q-scroll-area>
                        </div>
                    </div>
                </q-page>
            </q-page-container>

            <!-- login dialog -->
            <login-dialog></login-dialog>  
        </q-layout>
    `,
});

app.use(router)
app.use(Quasar)
app.mount('#app')