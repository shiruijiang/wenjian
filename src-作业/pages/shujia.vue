<template>
    <div class="boxs">
        <div class="headers">
            <p><span>剩余金额:</span>0纵横币<button>￥充值</button></p>
            <p><span>推荐票:</span>0张</p>
            <p><span>月票:</span>0张</p>
        </div>
        <div class="contents">
            <div class="tab">
                <router-link to="/shujia/mine" tag="li">我的书架</router-link>
                <router-link to="/shujia/read" tag="li">最近阅读</router-link>
            </div>
            <div class="fenqu">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<style scoped>
.boxs{
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
}
    .headers{
        width: 100%;
        height: 120px;
        border-bottom: 1px solid #ccc;
    }
    .headers p{
        margin: 10px;
    }
    p span{
        color: #a0a0a0;
    }
    p button{
        width: 60px;
        height: 30px;
        background: #ed554d;
        border-radius: 5px;
        border:none;
        outline: none;
        color: white;
        margin-left: 200px;
    }
    .contents{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .tab{
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #f2f2f2;
    }
    .tab li{
        width: 50%;
        line-height: 26px;
        text-align: center;
    }
    .router-link-exact-active{
        color: #ed554d;
        background: #f2f2f2;
        border-bottom: 2px solid #ed554d;
    }
    .fenqu{
        flex: 1;
        overflow: auto;
    }
</style>

