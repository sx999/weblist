<template>
  <div id="app">
    <!-- <div v-loading.fullscreen.lock="fullscreenLoading"> -->
            <!-- <router-view/> -->
    <!-- </div> -->
    <!-- <div>
        <router-view/>
    </div> -->
     
        <router-view></router-view>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      transitionName:''
    }
  },
  created(){
     
  },
  mounted(){
    setTimeout(function(){
      document.body.removeChild(document.getElementById('app1')) 
      }, 1000);
   
  },
  destroyed(){
    
  },
  watch:{
    
  },
  computed:{

  },
  methods:{
  
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
		 background-color: #F8F8F8 !important;
	}
  a{
      color: #000000;
      text-decoration: none;
      padding: 0 !important;
  }
    ul,li{ list-style: none;}
    p { max-height: 100%!important;}

</style>