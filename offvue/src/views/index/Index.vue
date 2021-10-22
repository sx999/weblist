<template>
    <el-container>
        <el-header id="header">
           <div class="cheader">
                <div class="logo-left-img">
                
                </div>
                <ul class="nav">
                <li><span>首页</span></li>
                <li><span>公司概况</span></li>
                <li><span>新闻动态</span></li>
                <li><span>热门赛事 </span></li>
                <li><span>研学活动</span></li>
                <li><span>专家顾问</span></li>
                <li><span>文创商城</span></li>
                <li><span>关于我们</span></li>
                </ul>
            </div>  
        </el-header>
        <el-main class="content">
           <router-view/>
        </el-main>
    </el-container>
</template>
<script>
import axios from 'axios'
export default({
  data(){
      return{}
  },
  components:{},
  created(){},
  mounted(){},
  methods:{
      
  }
})
</script>

<style scoped>
    #header{
        /* width: 100%; */
        max-width:1920px;
        height: 88px !important;
        padding: 0 448px!important;
        background-color: #FFFFFF;
    }
   #header .cheader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        /* background-color: rgb(54, 75, 75) */
    }
    #header  .cheader .logo-left-img{
        /* margin-left: 448px; */
        width: 175px;
        height: 72px;
        background-color: aqua;
    }
    #header .cheader .nav{
        display: flex;
        align-items: center;
    
        width:650px;
    }
    #header .cheader .nav li{
        width: 81.25px;
        /* width: 12.5%; */
        font-size: 16px;
        text-align: center;
    }
    #header .cheader .nav li span{
        border-bottom: 3px solid #F2C723;
    }
    .content{
        padding: 0 !important;
    }
</style>