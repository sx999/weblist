<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Contact-box">
            <img :src="this.BannerData.rotationUrl" alt="联系我们">
            <div class="posit">   
                <!-- <p class="posit-p1">联系我们</p> -->
            </div>
        </div>
        <div class="Contact-box-content">
            <div class="title">联<p>系我</p>们</div>
            <div class="data">
                <div class="left"><img src="../../assets/images/map.png" alt=""> </div>
                <div class="right">
                    <p>服务热线:15738505738</p>
                    <p>商务合作：xingyouxin2020@163.com</p>
                    <p>工作时间：周一至周五、上午9点至下午5点半</p>
                    <p>公司地点：河南省郑州市中原区华强云瓴中心 4008、4009室</p>
                </div>
            </div>
        </div>
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
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=6')
            .then(res=>{
                console.log(res)
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
    .Contact-box{
        position: relative;
        width: 100%;
        height: 580px;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .Contact-box img{
        width: 100%;
        height: 100%;
    }
    .Contact-box p{
        margin: 0 !important;
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
        color: #FF7A00;
    }
    .Contact-box .posit .posit-p2{
        font-size: 36px;
    }
    .Contact-box-content{
    margin: 0 auto;
    margin-top: 60px;
    width: 1024px;
    }
    .Contact-box-content .title{
        width: 100%;
        font-size: 30px;
        justify-content: center;
        display: flex;
        font-weight: 400;
        color: #333333;
    }
    .Contact-box-content .title p{
        margin: 0;
        border-bottom:5px solid #EA862A;
    }
    .Contact-box-content .data{
        display: flex;
        width: 1024px;
        margin: 0 auto;
        margin-top: 40px;
    }
    .Contact-box-content .data .left{
        width: 598px;
        height: 342px;
    }
    .Contact-box-content .data .left img{
        width: 100%;
    }
    .Contact-box-content .data .right{
        margin-left: 62px;
        padding: 100px 0;
        width: 360px;
        font-size: 18px;
        font-weight: 400;
        color: #333333;
    }
</style>