<template>
    <div class="layout">
        <NavBar></NavBar>
    </div>
</template>

<script>
    import NavBar from '../NavBar/NavBar'

    export default {
        name: "Layout",
        components: {
            NavBar
        }
    }
</script>

<style lang="scss">
    .layout{
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 1200px){
        .navBar{
            .container {
                width: 1170px;
            }
        }
    }
    @media screen and (min-width: 992px){
        .navBar {
            .container {
                width: 970px;
            }
        }
    }
    @media screen and (min-width: 768px){
        .navBar {
            .container {
                width: 750px;
            }
        }
    }
    @media screen and (min-width: 480px){
        .navBar {
            .container {
                width: 606px;
            }
        }
    }

</style>

