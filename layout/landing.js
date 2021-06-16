import {user} from '/store/user.js'

export default {
    name: 'Landing Header & Drawer',

    setup() {
        const {ref} = Vue
        const {getScrollTarget, setVerticalScrollPosition} = Quasar.scroll
        const drawer = ref(false)

        //scroll to section
        function scroll(id) {         
            const el = document.getElementById(id)
            const target = getScrollTarget(el)
            setVerticalScrollPosition(target, el.offsetTop, 500)
        }

        return {user, drawer, scroll}
    },

    template: `
        <!-- Header -->
        <q-header>
            <q-toolbar>
                <q-btn dense flat round to="/"><img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"></q-btn>
                <q-toolbar-title>Quasar Template</q-toolbar-title>
                <q-space />
                <div class="q-gutter-md row" v-if="$q.screen.gt.xs">
                    <q-btn no-caps flat label="Home" @click="scroll('home')" />
                    <q-btn no-caps flat label="Features" @click="scroll('features')" />
                    <q-btn no-caps flat label="Plans" @click="scroll('plans')" />
                    <q-btn no-caps flat label="About us" @click="scroll('about')"/>
                    <q-btn no-caps flat label="Contact" @click="scroll('contact')" />
                    <q-btn no-caps class="loginbtn" label="Log in" @click="user.loginDialog.show=!user.loginDialog.show" />
                </div>
                <q-btn dense flat round icon="menu" @click="drawer=!drawer" v-if="$q.screen.lt.sm"/>
            </q-toolbar>
        </q-header>

        <!-- Drawer -->
        <q-drawer v-model="drawer" side="left" class="drawer">  
            <q-scroll-area style="height: 100%; max-width: 300px;">    
                <q-list @click="drawer=!drawer">
                    <q-item v-ripple clickable @click="scroll('home')">
                        <q-item-section avatar><q-icon name="home" /></q-item-section>
                        <q-item-section>Home</q-item-section>
                    </q-item>
                    <q-item v-ripple clickable @click="scroll('features')">
                        <q-item-section avatar><q-icon name="description" /></q-item-section>
                        <q-item-section>Features</q-item-section>
                    </q-item>
                    <q-item v-ripple clickable @click="scroll('plans')">
                        <q-item-section avatar><q-icon name="paid" /></q-item-section>
                        <q-item-section>Plans</q-item-section>
                    </q-item>
                    <q-item v-ripple clickable @click="scroll('about')">
                        <q-item-section avatar><q-icon name="info" /></q-item-section>
                        <q-item-section>About us</q-item-section>
                    </q-item>
                    <q-item v-ripple clickable @click="scroll('contact')">
                        <q-item-section avatar><q-icon name="email" /></q-item-section>
                        <q-item-section>Contact</q-item-section>
                    </q-item>
                    <q-item v-ripple clickable @click="user.loginDialog.show=!user.loginDialog.show">
                        <q-item-section avatar><q-icon name="login" /></q-item-section>
                        <q-item-section>Log in</q-item-section></q-item>
                    <q-item v-ripple clickable>
                        <q-item-section avatar><q-icon name="control_point" /></q-item-section>
                        <q-item-section>Sign up</q-item-section>
                    </q-item>
                </q-list>     
            </q-scroll-area>
        </q-drawer>   
    `,
};