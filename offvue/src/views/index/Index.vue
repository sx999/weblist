<template>
    <el-container>
        <el-header id="header">
            <div class="cheader">
                <div class="logo-left-img">
                </div>
                <ul class="nav hidden-xs hidden-sm">
                <li @click="Active(1)"><router-link to="/"><span :class="{'active':currentSort==1}">首页</span></router-link></li>
                <li @click="Active('2')"><router-link to="/"><span :class="{'active':currentSort=='2'}">公司概况</span></router-link></li>
                <li @click="Active('3')"><router-link to="/"><span :class="{'active':currentSort=='3'}">新闻动态</span></router-link></li>
                <li @click="Active('4')"><router-link to="/"><span :class="{'active':currentSort=='4'}">热门赛事</span></router-link></li>
                <li @click="Active('5')"><router-link to="/"><span :class="{'active':currentSort=='5'}">研学活动</span></router-link></li>
                <li @click="Active('6')"><router-link to="/"><span :class="{'active':currentSort=='6'}">专家顾问</span></router-link></li>
                <li @click="Active('7')"><router-link to="/"><span :class="{'active':currentSort=='7'}">文创商城</span></router-link></li>
                <li @click="Active('8')"><router-link to="/"><span :class="{'active':currentSort=='8'}">关于我们</span></router-link></li>
                </ul>
                <div class="classButton hidden-md hidden-lg" @click="isBarShow = !isBarShow"><i class="el-icon-s-operation"></i></div>
            </div>  
        </el-header>
         <transition name="slide-fade">
            <nav class="navbar" v-show="isBarShow">
                <ul class="navbar-nav">
                    <li><router-link to="/"><span>首页</span></router-link></li>
                    <li><router-link to="/"><span>公司概况</span></router-link></li>
                    <li><router-link to="/"><span>新闻动态</span></router-link></li>
                    <li><router-link to="/"><span>热门赛事</span></router-link></li>
                    <li><router-link to="/"><span>研学活动</span></router-link></li>
                    <li><router-link to="/"><span>专家顾问</span></router-link></li>
                    <li><router-link to="/"><span>文创商城</span></router-link></li>
                    <li><router-link to="/"><span>关于我们</span></router-link></li>
                </ul>
            </nav>
        </transition>
        <el-main class="content">
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
            height: 88px !important;
            padding:0 448px;
        }
        .logo-left-img{
            width: 175px;
            height: 72px;
            background-color: aqua;
        }
        .navbar{
            display: none;
        }
    }
    @media (max-width: 768px){
        #header{
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
        .navbar{
            display: block;
            position: absolute;
            top: 54px;
            left: 0;
            overflow-y:hidden;
            z-index: 99;
            width: 100%;
            height:320px;
            padding: 0 15px;
            background-color: #36A4F1;
            border-width: 0;
            font-size: 16px;    
        }
        .navbar .navbar-nav{
            margin: 0 auto;
        }
        .navbar .navbar-nav li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid hsla(0,0%,100%,0.20);
        }
        .navbar .navbar-nav li:nth-child(8){
            border: none;
        }
        .navbar .navbar-nav li a{
            text-decoration: none;
            color: #FFFFFF !important;
        }
        
        .slide-fade-enter-active,.slide-fade-leave-active{
            transition: all 1s ease;
        }
        .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
            height: 0;
        }
    }
    #header{
        width: 100%;
        background-color: #FFFFFF;
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
    .content{
        z-index: 98;
        margin:0 !important;
        padding: 0 !important;
    }
</style>