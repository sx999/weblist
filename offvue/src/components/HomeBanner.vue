<template>
    <div class="banner">
        <el-carousel :height="bannerHeight+'px'" arrow="always" >
            <!-- <el-carousel height="780px"> -->
            <el-carousel-item v-for="(item,index) in BannerData" :key="index">
                <div class="pic_item">
                     <img class="small" :src="item.rotationUrl" alt="">
                    <div class="posit-element">
                        <p class="z-title">行由心教育</p>
                        <!-- <p>{{item.rotationName}}</p> -->
                        <!-- <div class="yello-d">
                            <span>了解更多</span>  -->
                            <!-- <span class="iconfont icon-tuxing"></span> -->
                            <!-- <img src="../assets/images/arrows.png" alt=""> -->
                        <!-- </div> -->
                    </div>
                     <div class="posit-element-right">
                        <p class="z-title">美育教育</p>
                        <p class="z-title indent1">体育教育</p>
                        <p class="z-title indent2">中华优秀传统文化</p>
                     </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        
    </div>
    
</template>
<script>
// import Transition from '@/components/Transition.vue'
export default {
    data(){
        return{
            BannerData:[],
            bannerHeight:"",
            show:true
        }
    },
    components:{
        // Transition,
    },
    created(){
        this.Queryall()
    },
    mounted(){
        var h= window.screen.height
        var w = window.screen.width
        console.log(h,w)
        if(h<992){
            this.bannerHeight=260
        }else if(w >=992){
            this.bannerHeight = 680
        }
    },
    computed:{
      
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=3&sort=1')
            .then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                        this.BannerData =  res.data.data.page.dataList
                        this.show=false
                }else{
                    this.show=true
                    return false
                }
            })
        },
    },
}
</script>
<style scoped>
    .el-carousel__container {
        height: 100% !important;
    }
   /* .el-carousel__indicator--horizontal .el-carousel__button {
        width: 20px !important;
        height: 20px !important;
        border-radius: 50% !important;
    }
    .el-carousel__indicator .el-carousel__button{
         width: 20px !important;
        height: 20px !important;
        border-radius: 50% !important;
    } */
    /* img{
        display: inline-banner;
        width: 100%;
        height:100%;
    } */
    /* @media (max-width: 768px){
         .banner{
             height: 260px;
         }
    } */
    /* @media (max-width: 1920px){ */
         .banner{
             height: 100%;
         }
         .banner .el-carousel__arrow{
             color: #000 !important;
             background-color:#FFFFFF !important;
         }
         /* .banner .el-carousel__arrow i{
             background-color:#000 !important;
         } */
         .small {
           position: absolute;
        }
         .pic_item{
            position: relative;
            height: 100%;
        }
         .pic_item:hover{
            cursor: pointer;
        }
         .pic_item img {
            /* position: absolute; */
            width: 100%;
            height: 100%;
        }

         .pic_item .posit-element{
            position: absolute;
            top:16px;
            left: 0;
            right: 16%;
            bottom: 0;
            margin:auto;
            width: 448px;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            /* color: #FFFFFF; */
            /* color: #000; */
            color: #EA862A;
            letter-spacing:20px;
            /* font-family: PingFang SC-Bold, PingFang SC; */
        }
        .z-title{
             font-family:'ziti1';
        }
        .indent1{
            text-indent: 40px;
        }
        .indent2{
            text-indent: 80px;
        }
        .pic_item .posit-element-right{
            position: absolute;
            top:0;
            left: 52%;
            right: 0;
            bottom: 0;
            margin:auto;
            width: 448px;
            height: 200px;
            display: flex;
            flex-direction: column;
            color: #EA862A;
            font-size: 34px;
            letter-spacing:6px;
        }

        .pic_item .posit-element p:nth-child(1){
            font-size: 76px;
            /* font-weight: 800; */
            margin: 0;
        }
        .pic_item .posit-element p:nth-child(2){
            font-size: 64px;
            font-weight: 800;
            margin:0;
        }
         .pic_item .posit-element .yello-d{
            padding: 0 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 42px;
            width: 122px;
            height: 48px;
            font-size: 18px;
            font-weight: 600;
            color: #FFFFFF;
            background-color: #EA862A;
         }
          .pic_item .posit-element .yello-d img{
              width: 18px;
              height: 18px;
          }
          /* .pic_item .posit-element .yello-d span:nth-child(2){
              font-size: 20px;
          } */
         
    /* } */
    
</style>