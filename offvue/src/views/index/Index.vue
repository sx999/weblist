<template>
    <el-container>
        <el-header id="header">
            <div class="logo-left-img">
                </div>
            <el-menu 
            :default-active="$route.path" 
            class="el-menu-demo navt hidden-xs hidden-sm" 
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
                <el-menu-item index="1">关于我们</el-menu-item>
            </el-menu>
            <!-- 手机端按钮 -->
            <div class="classButton hidden-md hidden-lg" @click="isBarShow = !isBarShow"><i class="el-icon-s-operation"></i></div>
            <!-- <div class="cheader">
                <div class="logo-left-img">
                </div>
                <ul class="nav hidden-xs hidden-sm">
                <li @click="Active(1)"><router-link to="/"><span :class="{'active':currentSort==1}">首页</span></router-link></li>
                <li @click="Active('2')"><router-link to="/about"><span :class="{'active':currentSort=='2'}">公司概况</span></router-link></li>
                <li @click="Active('3')"><router-link to="/"><span :class="{'active':currentSort=='3'}">新闻动态</span></router-link></li>
                <li @click="Active('4')"><router-link to="/"><span :class="{'active':currentSort=='4'}">热门赛事</span></router-link></li>
                <li @click="Active('5')"><router-link to="/"><span :class="{'active':currentSort=='5'}">研学活动</span></router-link></li>
                <li @click="Active('6')"><router-link to="/"><span :class="{'active':currentSort=='6'}">专家顾问</span></router-link></li>
                <li @click="Active('7')"><router-link to="/"><span :class="{'active':currentSort=='7'}">文创商城</span></router-link></li>
                <li @click="Active('8')"><router-link to="/"><span :class="{'active':currentSort=='8'}">关于我们</span></router-link></li>
                </ul>
                <div class="classButton hidden-md hidden-lg" @click="isBarShow = !isBarShow"><i class="el-icon-s-operation"></i></div>
            </div>   -->
        </el-header>
        <!-- 展开/收起 -->
        <div>
            <el-collapse-transition>
                <div v-show="isBarShow" class="navbar-nav" >
                    <ul>
                        <li><router-link to="/"><span>首页</span></router-link></li>
                        <li><router-link to="/"><span>公司概况</span></router-link></li>
                        <li><router-link to="/"><span>新闻动态</span></router-link></li>
                        <li><router-link to="/"><span>热门赛事</span></router-link></li>
                        <li><router-link to="/"><span>研学活动</span></router-link></li>
                        <li><router-link to="/"><span>专家顾问</span></router-link></li>
                        <li><router-link to="/"><span>文创商城</span></router-link></li>
                        <li><router-link to="/"><span>关于我们</span></router-link></li>
                    </ul>
                </div>
            </el-collapse-transition>
        </div>
         <!-- <transition name="slide-fade"> -->
            <!-- <div class="navbar"  v-show="isBarShow">
                  <div style="margin-top: 20px; height: 200px;" >
                    <el-collapse-transition>
                        <div class="transition-box">
                                <ul class="navbar-nav ">
                                    <li><router-link to="/"><span>首页</span></router-link></li>
                                    <li><router-link to="/"><span>公司概况</span></router-link></li>
                                    <li><router-link to="/"><span>新闻动态</span></router-link></li>
                                    <li><router-link to="/"><span>热门赛事</span></router-link></li>
                                    <li><router-link to="/"><span>研学活动</span></router-link></li>
                                    <li><router-link to="/"><span>专家顾问</span></router-link></li>
                                    <li><router-link to="/"><span>文创商城</span></router-link></li>
                                    <li><router-link to="/"><span>关于我们</span></router-link></li>
                                </ul>
                        </div>
                         
                    </el-collapse-transition>
                 </div>
              
            </div> -->
        <!-- </transition> -->
        <el-main class="conter">
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
        Active(index){
            this.currentSort  =  index;
        },
  }
})
</script>

<style scoped>
    *{margin: 0; padding: 0;}
    body{
        box-sizing: border-box;
        max-width: 1920px;
        margin: 0;
        padding: 0;
        background-color: #F8F8F8 !important;
    }
    a{
        color: #000000;
        text-decoration: none;
        padding: 0 !important;
    }
    ul,li{
        list-style: none;
    }
    @media (max-width: 1920px){
        #header{
            display: flex;
            justify-content: space-around;
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
        /* .navbar{
            display: none;
        } */
        .navt{
         
        }
        .el-menu.el-menu--horizontal{
            border-bottom:none !important;
        }
         .conter{
            margin:0 !important;
            padding: 0 !important;
           overflow:visible !important;
        }
      
    }
    @media (max-width: 768px){
        #header{
            width: 100%;
            background-color: #FFFFFF;
            height: 54px !important;
            padding:0 24px;
            position: relative;
        }
        .logo-left-img{
            width: 120px;
            height: 24px;
            background-color: aqua;
        }
        .classButton{
            color: #36A4F1;
            font-size: 30px;
        } 
        .navbar-nav{
            position: absolute;
            top: 54px;
            left: 0;
            z-index: 99;
            padding: 0 15px;
            margin: 0 auto;
            width: 100%;
            font-size: 16px;  
            background-color: #36A4F1;
            color: #FFFFFF;
        }
        .navbar-nav ul li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid hsla(0,0%,100%,0.20);
        }
       .navbar-nav ul li:nth-child(8){
            border: none;
        }
        .navbar-nav ul li a{
            text-decoration: none;
            color: #FFFFFF !important;
        }
        .conter{
            z-index: 98;
            margin:0 !important;
            padding: 0 !important;
            overflow: none !important;
        }
    }
    #header .cheader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    #header .cheader .nav{
        display: flex;
        align-items: center;
        width:650px;
        height: 100%;
    }
    #header .cheader .nav li{
        width: 81.25px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    .active{
        color: #459ba1;
        border-bottom: 3px solid #F2C723;
    }
    .nav>li>a:focus, .nav>li>a:hover{
        background: none;
    }
    
</style>