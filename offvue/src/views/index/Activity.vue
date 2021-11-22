<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Activity-box">
            <img :src="this.BannerData.rotationUrl" alt="研学活动">
            <div class="posit">   
                <!-- <p class="posit-p2">研学活动</p> -->
                <p class="posit-p1">{{this.BannerData.rotationName}}</p>
            </div>
            
        </div>

　　       <router-view ></router-view>
    </div>
</template>
<script>
export default {
    // name:'Activity',
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
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=5')
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
        height: 500px;
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