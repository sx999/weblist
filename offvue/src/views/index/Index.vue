<template>
    <el-container>
        <!-- pc -->
        <el-header id="header" class="hidden-xs" :class="{'is_fixed' : isFixed}">
            <div class="header-home">   
                 <div class="logo-left-img">
                        <img  src="@/assets/images/logo.png" alt="">
                 </div>
                <el-menu 
                :default-active="'/' +this.$route.path.split('/')[1]"
                class="el-menu-demo navt"
                :class="{'is_back' : isFixed}"
                mode="horizontal" 
                text-color="#333333"
                active-text-color="#E8910D "
                :router="true"
                >
                    <el-menu-item index="/home">首页</el-menu-item>
                    <el-menu-item index="/about">公司概况</el-menu-item>
                    <el-menu-item index="/journalism">行业新闻</el-menu-item>
                    <el-menu-item index="/events">热门赛事</el-menu-item>
                    <el-menu-item index="/activity">研学活动</el-menu-item>
                    <el-menu-item index="/contact">联系我们</el-menu-item>
                    <el-menu-item index="/recruitment">招贤纳士</el-menu-item>
                    <!-- <el-menu-item index="/expertadvisor">专家顾问</el-menu-item> -->
                    <!-- <el-menu-item index="/111">文创商城</el-menu-item> -->
                    
                </el-menu>
            </div>
           
        </el-header>
        <!-- h5 -->
        <!-- <header id="header-h5" class="hidden-lg">
          
            <div class="logo-left-img-h5"> </div>
           
            <div class="classButton" @click="isBarShow = !isBarShow"><i class="el-icon-s-operation"></i></div>
            
            <div  class="navbar-nav">
            <el-collapse-transition>
                <div v-show="isBarShow" >
                    <ul>
                        <li @click="Onshow"><router-link to="/home"><span>首页</span></router-link></li>
                        <li @click="Onshow"><router-link to="/journalism"><span>新闻动态</span></router-link></li>
                        <li @click="Onshow"><router-link to="/events"><span>赛事活动</span></router-link></li>
                        <li @click="Onshow"><router-link to="/expertadvisor"><span>专家顾问</span></router-link></li>
                        <li @click="Onshow"><router-link to="/111"><span>文创商城</span></router-link></li>
                        <li @click="Onshow"><router-link to="/about"><span>关于我们</span></router-link></li>
                    </ul>
                </div>
            </el-collapse-transition>
            </div>
        </header> -->

        <el-main id="conter">
           <router-view/>
        </el-main>

        <el-footer id="fotter">
            <!-- 底部start -->
            <Bootom></Bootom>
            <!-- 底部end -->
        </el-footer>
        <div class="scollTop" id="imgscoll" v-show="isShowimg">
            <img src="@/assets/images/inTop.png" alt="" @click="goTop">
        </div>
    </el-container>
</template>
<script>
import axios from 'axios'
import Bootom from '@/components/HomeBootom.vue'
export default({
  data(){
      return{
          currentSort:1, //默认首页状态
          isBarShow:false,
          height: "",
          isFixed:false,
          offsetTop:0,
          isShowimg:false,
      }
  },
  components:{Bootom},
  created(){},
  mounted(){
       window.addEventListener('scroll',this.initHeight);
        this.$nextTick( () => {
            this.offsetTop = document.querySelector('#header').offsetTop;
        })
        window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  methods:{
        Onshow(){
            this.isBarShow = false
        },
        //吸顶
        initHeight () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > this.offsetTop ? true : false;
        },
         // 回到顶部
        goTop(){
           
            document.body.scrollTop = document.documentElement.scrollTop = 0
            this.isShowimg = false
        },
        //滚动监听
        handleScroll(e) {
            // 滚动操作监听
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
            let offsetTop = 0
            try {
                offsetTop = document.querySelector('.main').offsetTop
            } catch (e) {
                offsetTop = 0
            }
            if (scrollTop > offsetTop) {
            if (scrollTop > 800) {
            this.isShowimg = true
            } else {
            this.isShowimg = false
            }
            } else {
                this.isShowimg = false
            }
        }
  },
  destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
  },
})
</script>

<style scoped>
    /* @media screen and  (max-width: 1920px){ */
        #header{
            width: 100%;
            background-color: #FFFFFF;
            height: 88px !important;
        }
        .header-home{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1024px;
            margin:0 auto;
        }
        .logo-left-img{
            width: 175px;
            height: 72px;
        }
         .logo-left-img img{
             width: 100%;
             height: 100%;
         }
        .el-menu.el-menu--horizontal{
            font-size: 16px !important;
            border-bottom:none !important;
        }
        #conter{
            margin:0 !important;
            padding: 0 !important;
            overflow:visible !important;
        }
        #fotter{
            width: 100%;
            height: 100% !important;
            margin: 0;
            padding: 0;
        }
      
    /* } */
    /* @media screen and (max-width: 767px){
        #header-h5{
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: #FFFFFF;
            height: 1.6rem !important;
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
    }  */
    .is_fixed{
        position: fixed;
        top: 0;
        z-index: 99;
        border-bottom:1px solid rgba(200, 200, 200, 0.3);
        /* background-color: rgba(0, 0, 0, 0.7) !important; */
    }
    .is_back{
        background-color: rgba(0, 0, 0, 0) !important;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
         border-bottom: 3px solid #E8910D !important;
    }
    .el-menu .el-menu-item:hover{
        color: #E8910D  !important;
        /* background: #6db6ff !important; */
        border-bottom: 3px solid #E8910D  !important;
    }
    .el-menu .el-submenu__title:hover{
        /* color: #f58f98 !important; */
        background: #6db6ff !important;
    }
    /* 回顶style */
    .scollTop {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        position: fixed;
        bottom: 80px;
        right:100px;
        background-color:#ffffff;
        box-shadow: 8px 8px 3px rgba(200, 200, 200, 0.3);
    }
    .scollTop img{
        width: 30px;
        height: 30px; 
    }
    .scollTop:hover{
        background-color:rgba(230, 230, 230, 0.3);
    }
</style>