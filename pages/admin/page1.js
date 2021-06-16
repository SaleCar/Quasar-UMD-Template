import component1 from '/components/component1.js'

export default {
    name: 'Page1',
    components: {component1},

    setup() {        
        const title = 'Page One'
        return {title}
    },

    template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <component1></component1>
        </q-page>
    `,
};