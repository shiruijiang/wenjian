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
export default {
    created(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container')
        })
    }
}
</script>
<style scoped>
    .swiper-container{
        width: 100%;
        height: 200px;
    }
    .swiper-wrapper.swiper-slide img{
        width: 100%;
        height: 100%;
    }
</style>


