<template>
    <div id="app">
        <Layout></Layout>
    </div>
</template>

<script>
    import Layout from './views/Layout/Layout.vue'

    export default {
        name: 'app',
        components: {
            Layout
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    li { list-style-type: none; }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
