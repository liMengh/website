<template>
    <div class="layout">
        <NavBar/>
        <Banner/>
        <TabControl/>
        <ProductClassify/>
    </div>
</template>

<script>
    import NavBar from '../NavBar/NavBar'
    import Banner from '../Banner/Banner'
    import TabControl from '../TabControl/TabControl'
    import ProductClassify from '../ProductClassify/ProductClassify'

    export default {
        name: "Layout",
        components: {
            NavBar,
            Banner,
            TabControl,
            ProductClassify
        }
    }
</script>

<style lang="scss">
    .layout {
        width: 100%;
        height: 100%;
    }
    .container {
        position: relative;
    }
    @media (min-width: 480px) {
        .container {
            width: 606px;
        }
    }

    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
        .countup-block-item{
            width: 50%;
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
        .countup-block-item{
            width: 25%;
        }
    }

    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
</style>

