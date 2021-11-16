<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Activity-box">
            <img src="../../assets/images/eventimg.png" alt="">
            <div class="posit">   
                <p class="posit-p1">研学活动</p>
                <p class="posit-p2">Tile标题:语言文化艺术节</p>
            </div>
            
        </div>
        
         <router-view/>
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
    .Activity-box img{
        width: 100%;
        height: 100%;
    }
    .Activity-box p{
        margin: 0 !important;
    }
    .Activity-box{
        position: relative;
        width: 100%;
        height: 686px;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .Activity-box .posit{
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
    .Activity-box .posit .posit-p2{
        font-size: 36px;
    }
</style>