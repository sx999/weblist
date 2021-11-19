<template>
     <div>
           <!-- 头部轮播 -->
        <div class="About-box">
            <img :src="this.BannerData.rotationUrl" alt="00">
            <!-- <div class="posit">   
                <p class="posit-p1">行由心教育</p>
                <p class="posit-p2">非学科教育领跑者</p>
            </div> -->
        </div>

         <router-view/>
    </div>
</template>
<script>
    export default {
    data(){
      return{
        BannerData:[]
      }
    },
    created(){
        this.Queryall()

    },
    methods:{
         Queryall(){
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=2')
            .then(res=>{
                //console.log(res)
                if(res.data.code == 200){
                        this.BannerData =  res.data.data.page.dataList[0]
                }else{
                    return false
                }
            })
        },
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
        height: 538px;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .About-box .posit{
        position: absolute;
        left: 40%;
        top: 0;
        right:0;
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