<template>
     <div>
           <!-- 头部轮播 -->
        <div class="About-box">
            <img src="../../assets/images/2.jpg" alt="00">
            <div class="posit">   
                <p class="posit-p1">行由心教育</p>
                <p class="posit-p2">中小学语言文化教育领跑者</p>
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
    },
    created(){
   

    }

  }
</script>

<style>
    .About-box img{
        width: 100%;
        height: 100%;
    }
    .About-box p{
        margin: 0 !important;
    }
    .About-box{
        position: relative;
        width: 100%;
        height: 686px;
        font-family: PingFang SC-Medium, PingFang SC;
    }
    .About-box .posit{
        position: absolute;
        left: 0;
        top: 0;
        right:28%;
        bottom: 0;
        margin:auto;
        width: 500px;
        height: 166px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items:center; */
        font-size: 64px;
        font-weight: bold;
        /* color: #FFFFFF; */
        color: #333333;
        
    }
    .About-box .posit .posit-p2{
        font-size: 36px;
    }
</style>