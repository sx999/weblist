<template>
  <div id="app">
    <!-- <div v-loading.fullscreen.lock="fullscreenLoading"> -->
            <!-- <router-view/> -->
    <!-- </div> -->
    <div>

       <router-view/>
    </div>
    <!-- 首屏动画 -->
    <!-- <div class="spinner" v-if="showblock">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      // fullscreenLoading: false,
      // showblock:true
    }
  },
  created(){
     document.body.removeChild(document.getElementById('app1'))
  },
  mounted(){
    // this.openFullScreen1()
    // this.showMake()
  },
  destroyed(){
    
  },
  watch:{
    
  },
  methods:{
    // showMake(){
    //    setTimeout(() => {
    //       this.showblock = false
    //     }, 3000);
    // }
    //  openFullScreen1() {
    //    const loading = this.$loading({
    //       lock: true,
    //       text: 'Loading',
    //       customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
    //       spinner: 'el-icon-loading',
    //       background: 'rgba(0, 0, 0,0.8)'
    //     });
    //     setTimeout(() => {
    //       loading.close();
    //     }, 4000);
    //   },
  }
}
</script>
<style >
 *{
		margin: 0;
		padding: 0;
	}
  #app{
      /* font-family:'ziti'; */
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
     /* width:1920px; */
		 background-color: #F8F8F8 !important;
     /* background-color: #F8F8F8 !important; */
	}
  a{
      color: #000000;
      text-decoration: none;
      padding: 0 !important;
  }
  ul,li{
      list-style: none;
  }
  p { max-height: 100%!important;}
  /* .create-isLoading .el-loading-spinner{
      top: 50%;
      left: 50%;
      margin-left: -55px;
      background: rgba(0, 0, 0, 0.8) !important;
      padding: 20px;
      border-radius: 4px;
      width: auto;
      text-align: center;
      position: absolute;
  }
  .create-isLoading .el-loading-spinner i {
      font-size: 50px;
      color: #eee;
  }
  .create-isLoading .el-loading-spinner .el-loading-text {
      color: #eee;
  } */
   .spinner {
      margin: 0 auto;
      width: 100vw;
      height: 100vh;
      line-height: 100vh;
      text-align: center;
      font-size: 10px;
    }

    .spinner > div {
      background-color: #EA862A;
      height: 80px;
      width: 6px;
      display: inline-block;
      -webkit-animation: stretchDelay 1.2s infinite ease-in-out;
      animation: stretchDelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .spinner .rect3 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }

    .spinner .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .spinner .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }

    @-webkit-keyframes stretchDelay {
      0%, 40%, 100% {
        -webkit-transform: scaleY(0.4)
      }
      20% {
        -webkit-transform: scaleY(1.0)
      }
    }

    @keyframes stretchDelay {
      0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }
</style>