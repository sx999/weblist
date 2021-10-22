<template>
    <el-container>
        <el-header class="header">
            <div class="logo-left-img">
            <!-- image -->
            </div>
            <ul class="nav">
                <li><span>首页</span></li>
                <li><span>公司概况</span></li>
                <li><span>新闻动态</span></li>
                <li><span>热门赛事</span></li>
                <li><span>研学活动</span></li>
                <li><span>专家顾问</span></li>
                <li><span>文创商城</span></li>
                <li><span>关于我们</span></li>
            </ul>
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
    .header{
        display: flex;
        align-items: center;
        width: 100%;
        height: 88px !important;
        padding: 0 !important;
        /* background-color: #FFFFFF; */
    }
    .header .logo-left-img{
        margin-left: 448px;
        width: 175px;
        height: 72px;
        background-color: aqua;
    }
    .header .nav{
        display: flex;
        align-items: center;
        margin-left: 192px;
        margin-right: 454px;
        width:650px;
    }
    .header .nav li{
        width: 12.5%;
        font-size: 16px;
        text-align: center;
    }
    .header .nav li span{
        border-bottom: 3px solid #F2C723;
    }
    .content{
        padding: 0 !important;
    }
</style>