<template>
    <div>
        <Vswiper/>
        <div class="item">
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
          <dl>
            <dt><i class="el-icon-s-shop"></i></dt>
            <dd>成单奖励</dd>
          </dl>
        </div>
    </div>
</template>
<style scoped>
.item{
    width: 100%;
    height: 70px;
    display: flex;
    margin-top: 10px;
}
.item dl{
    width: 25%;
    height: 70px;
    display: flex;
    flex-direction: column;
}
.item dl dt{
    display: flex;
    justify-content: space-around
}
.item dl dd{
    display: flex;
    justify-content: space-around
}
    dl dt i{
        font-size: 50px
    }
</style>

