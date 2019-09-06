<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/logo.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted(){
        const mySwiper=new Swiper('.swiper-container',{
            autoplay:true
        })
    }
}
</script>

