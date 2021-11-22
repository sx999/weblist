<template>
    <div>
        <!-- 头部导航 -->
        <div class="Journalism-box">
            <img :src="this.BannerData.rotationUrl" alt="00">
            <p>{{this.BannerData.rotationName}}</p>
        </div>
        
         <router-view/>
    </div>
</template>
<script>
export default {
    //  name:'Journalism',
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
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=3')
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
   .Journalism-box{
        width: 100%;
        height: 500px;
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