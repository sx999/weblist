<template>
    <div class="banner">
        <el-carousel :height="bannerHeight+'px'" arrow="always" v-show="this.BannerData.length>1">
            <!-- <el-carousel height="780px"> -->
            <el-carousel-item v-for="(item,index) in BannerData" :key="index">
                <div class="pic_item">
                     <img class="small" :src="item.rotationUrl" alt="">
                    <!-- <div class="posit-element">
                        <p class="z-title">行由心教育</p> -->
                        <!-- <p>{{item.rotationName}}</p> -->
                        <!-- <div class="yello-d">
                            <span>了解更多</span>  -->
                            <!-- <span class="iconfont icon-tuxing"></span> -->
                            <!-- <img src="../assets/images/arrows.png" alt=""> -->
                        <!-- </div> -->
                    <!-- </div>
                     <div class="posit-element-right">
                        <p class="z-title">美育教育</p>
                        <p class="z-title indent1">体育教育</p>
                        <p class="z-title indent2">中华优秀传统文化</p>
                     </div> -->
                </div>
            </el-carousel-item>
        </el-carousel>
        <div v-show="this.BannerData.length<=1" class="onebox">
            <div v-for="(item,index) in BannerData" :key="index">
                <img :src="item.rotationUrl" alt="" class="small">
                <div class="po-title">
                    <p class="z-title">行由心教育</p>
                </div>
                <div class="po-title-right">
                    <p class="z-title">美育教育</p>
                    <p class="z-title indent1">体育教育</p>
                    <p class="z-title indent2">中华优秀传统文化</p>
                </div>
            </div> 
        </div>
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
    .banner{
        height: 100%;
    }
    .banner .el-carousel__arrow{
        color: #000 !important;
        background-color:#FFFFFF !important;
    }
    .pic_item{
        position: relative;
        height: 100%;
    }
    .pic_item:hover{
        cursor: pointer;
    }
    .pic_item img {
        width: 100%;
        height: 100%;
    }
    .small {
        position: absolute;
    }
    .onebox{
        width: 100%;
        height: 580px;
        position: relative;
    }
    .onebox img{
        /* width: 1920px; */
        width: 100%;
        height: 100%;
    }
    .onebox .po-title{
        position:absolute;
        top: -36px;
        left: 0;
        right: 16%;
        bottom: 0;
        margin:auto;
        width: 448px;
        height: 200px;
        color: #EA862A;
        letter-spacing:10px;
        font-size: 76px;
    }
    .onebox .po-title-right{
        position: absolute;
        top:0;
        left: 51%;
        right: 0;
        bottom: 0;
        margin:auto;
        width: 448px;
        height: 200px;
        display: flex;
        flex-direction: column;
        color: #EA862A;
        font-size: 34px;
        letter-spacing:4px;
    }
    .z-title{
        font-family:'ziti1';
    }
    .indent1{
        text-indent: 38px;
    }
    .indent2{
        text-indent: 76px;
    }
    /* .pic_item .posit-element{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        width: 448px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #EA862A;
        letter-spacing:20px;
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
        margin: 0;
    }
    .pic_item .posit-element p:nth-child(2){
        font-size: 64px;
        font-weight: 800;
        margin:0;
    } */
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

</style>