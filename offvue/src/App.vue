<template>
  <div id="app">
    <div v-loading.fullscreen.lock="fullscreenLoading">
      <router-view/>
    </div>
      
  </div>
</template>
<script>
export default {
  data(){
    return{
      fullscreenLoading: false
    }
  },
  mounted(){
    this.openFullScreen1()
  },
  watch:{
    
  },
  methods:{
     openFullScreen1() {
       const loading = this.$loading({
          lock: true,
          text: 'Loading',
          customClass: 'create-isLoading',  // *这里设置他的class名称,这里最重要
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0,0.8)'
        });
        setTimeout(() => {
          loading.close();
        }, 4000);
        // this.fullscreenLoading = true;
        // setTimeout(() => {
        //   this.fullscreenLoading = false;
        // }, 2000);
      },
  }
}
</script>
<style >
 *{
		margin: 0;
		padding: 0;
	}
  #app{
      font-family:'ziti';
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
  .create-isLoading .el-loading-spinner{
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
  }
</style>