<template>
    <el-container>
        <!-- pc -->
        <el-header id="header" class=" hidden-xs ">
            <div class="logo-left-img"> </div>
               
            <el-menu 
            :default-active="$route.path" 
            class="el-menu-demo navt" 
            mode="horizontal" 
            background-color="#FFFFFF"
            text-color="#000"
            active-text-color="#ffd04b"
            :router="true"
            >
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/about">公司概况</el-menu-item>
                <el-menu-item index="1">新闻动态</el-menu-item>
                <el-menu-item index="1">热门赛事</el-menu-item>
                <el-menu-item index="1">研学活动</el-menu-item>
                <el-menu-item index="1">专家顾问</el-menu-item>
                <el-menu-item index="1">文创商城</el-menu-item>
                <el-menu-item index="1">关于我们</el-menu-item>
            </el-menu>
        </el-header>
        <!-- h5 -->
        <header id="header-h5" class="hidden-lg">
            <!-- logo -->
            <div class="logo-left-img-h5"> </div>
            <!-- 按钮 -->
            <div class="classButton" @click="isBarShow = !isBarShow"><i class="el-icon-s-operation"></i></div>
            <!-- 展开/收起 -->
            <div  class="navbar-nav">
            <el-collapse-transition>
                <div v-show="isBarShow" >
                    <ul>
                        <li @click="Onshow"><router-link to="/home"><span>首页</span></router-link></li>
                        <li @click="Onshow"><router-link to="/about"><span>公司概况</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>新闻动态</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>热门赛事</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>研学活动</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>专家顾问</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>文创商城</span></router-link></li>
                        <li @click="Onshow"><router-link to="/"><span>关于我们</span></router-link></li>
                    </ul>
                </div>
            </el-collapse-transition>
            </div>
        </header>

        <el-main id="conter">
           <router-view/>
        </el-main>
        
    </el-container>
</template>
<script>
import axios from 'axios'
export default({
  data(){
      return{
          currentSort:1, //默认首页状态
          isBarShow:false,
          height: ""
      }
  },
  components:{},
  created(){},
  mounted(){},
  methods:{
        // Active(index){
        //     this.currentSort  =  index;
        // },
        Onshow(){
            this.isBarShow = false
        }
  }
})
</script>

<style scoped>
    @media screen and  (max-width: 1920px){
        #header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: #FFFFFF;
            height: 88px !important;
            padding:0 455px 0 448px;
          
        }
        .logo-left-img{
            width: 175px;
            height: 72px;
            background-color: aqua;
        }
        .el-menu.el-menu--horizontal{
            border-bottom:none !important;
        }
         #conter{
            margin:0 !important;
            padding: 0 !important;
           overflow:visible !important;
        }
      
    }
    @media screen and (max-width: 767px){
        #header-h5{
            display: flex;
            justify-content: space-between;
            /* align-items:center; */
            width: 100%;
            background-color: #FFFFFF;
            height: 1.6rem !important;
            /* padding:0 24px; */
            position: relative;
        }
        .logo-left-img-h5{
            width:3rem;
            height: 1.6rem;
            background-color: aqua;
        }
        .classButton{
            width: 3rem;
            height: 1.6rem;
            color: #36A4F1;
            font-size:1.2rem;
            text-align: right;
        } 
        .navbar-nav{
            position: absolute;
            top:1.6rem;
            left: 0;
            z-index: 99;
            padding: 0 30px;
            margin: 0 auto;
            width: 100%;
            font-size: 0.5rem;  
            background-color: #36A4F1;
            color: #FFFFFF;
        }
        .navbar-nav ul li{
            height:1rem;
            line-height: 1rem;
            border-bottom: 1px solid hsla(0,0%,100%,0.20);
        }
        .navbar-nav ul li:nth-child(8){
            border: none;
        }
        .navbar-nav ul li a{
            text-decoration: none;
            color: #FFFFFF !important;
        }
        #conter{
            z-index: 98;
            margin:0 !important;
            padding: 0 !important;
            overflow: none !important;
        }
    } 
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        #header{
            padding: 0 100px;
        }
        #header-h5{
            display: none !important;
            
        }
    } 
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        #header{
            padding: 0 200px;
        }
        #header-h5{
            display: none !important;
            
        }
    } 
    @media only screen and  (min-width: 1201px) and (max-width: 1440px){
        #header{
            padding: 0 300px;
        }
    } 
  
</style>