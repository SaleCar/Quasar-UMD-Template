import {user} from '/store/user.js'

export default {
    name: 'App Header & Drawer',

    setup() {
        const {reactive} = Vue

        const drawer = reactive({
            show: false,
        })
            
        return {user, drawer}
    },

    template: `
        <!-- Header -->
        <q-header>
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="drawer.show=!drawer.show" class="q-mr-md" />
                <q-btn dense flat round to="/"><img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"></q-btn>
                <q-toolbar-title>                    
                    Quasar Template              
                </q-toolbar-title>
                <q-space />
                <div class="row items-center">
                    <!-- avatar -->
                    <q-btn flat round no-wrap>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                        <q-menu auto-close>
                            <q-list dense>
                                <q-item>
                                    <q-item-section>
                                        <div>{{user.name}}</div>
                                    </q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                    <q-item-section>Your profile</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable>
                                    <q-item-section>Help</q-item-section>
                                </q-item>
                                <q-item clickable>
                                    <q-item-section>Settings</q-item-section>
                                </q-item>
                                <q-item clickable @click="user.logout()">
                                    <q-item-section>Log out</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <!-- Drawer -->
        <q-drawer show-if-above v-model="drawer.show" side="left" class="drawer">  
            <q-scroll-area style="height: 100%; max-width: 300px;">    
                <q-list>              

                    <!-- Loop routes (pages) -->
                    <template v-for="route in this.$router.options.routes">
                        <q-item v-ripple clickable :to="route.path">
                            <q-item-section avatar><q-icon :name="route.meta.icon" size="md" /></q-item-section>
                            <q-item-section>{{route.meta.title}}</q-item-section>
                        </q-item>
                    </template> 

                </q-list>  
            </q-scroll-area>
        </q-drawer>      
    `,
};