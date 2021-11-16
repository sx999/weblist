<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Contact-box">
            <img src="../../assets/images/eventimg.png" alt="">
            <div class="posit">   
                <p class="posit-p1">联系我们</p>
                <p class="posit-p2">Tile标题:联系我们</p>
            </div>
        </div>
         <h1>内容</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .Contact-box img{
        width: 100%;
        height: 100%;
    }
    .Contact-box p{
        margin: 0 !important;
    }
    .Contact-box{
        position: relative;
        width: 100%;
        height: 686px;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .Contact-box .posit{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        width: 500px;
        height: 166px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        font-size: 64px;
        font-weight: bold;
        color: #FFFFFF;
        color: #333333;
        
    }
    .Contact-box .posit .posit-p2{
        font-size: 36px;
    }
</style>