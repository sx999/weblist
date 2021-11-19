<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Events-box">
            <img :src="this.BannerData.rotationUrl" alt="热门赛事">
            <div class="posit">   
                <!-- <p class="posit-p2">热门赛事</p> -->
                <p class="posit-p1">{{this.BannerData.rotationName}}</p>
            </div>
        </div>
         <router-view/>
    </div>
</template>
<script>
export default {
    // name:'Events',
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
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=4')
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
    .Events-box img{
        width: 100%;
        height: 100%;
    }
    .Events-box p{
        margin: 0 !important;
    }
    .Events-box{
        position: relative;
        width: 100%;
        height: 580px;
    }
    .Events-box .posit{
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
    .Events-box .posit .posit-p2{
        font-size: 36px;
    }
    .ql-align-center{
        text-align: center;
    }
    .ql-align-left{
        text-align: left;
    }
    .ql-align-right{
        text-align: right;
    }
</style>