import component2 from '/components/component2.js'

export default {
    name: 'Page2',
    components: {component2},

    setup() {
        const title = 'Page Two'
        return {title}
    },
    
    template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <component2></component2>
        </q-page>
    `,
  };