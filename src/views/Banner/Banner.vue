<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <img src="./images/banner-1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="./images/banner-2.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    effect: 'cube',
                    grabCursor: true,
                    loop: true,
                    speed:600,
                    autoplay:5000,
                    cubeEffect: {
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .swiper-inner {
        position: relative;
        overflow: hidden;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
    }
</style>
