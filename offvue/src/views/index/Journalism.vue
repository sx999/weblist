<template>
    <div>
        <!-- 头部导航 -->
        <div class="Journalism-box">
            <img src="../../assets/images/img3.jpg" alt="">
            <p>行业新闻</p>
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

    },
    methods:{
      
    }
}
</script>
<style scoped>
   .Journalism-box{
        width: 100%;
        height: 686px;
        position: relative;
    }
    .Journalism-box img{
        width: 100%;
        height: 100%;
    }
    .Journalism-box p{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        width: 288px;
        height: 101px;
        font-size: 72px;
        font-weight: bold;
        color: #FFFFFF;
    }
</style>