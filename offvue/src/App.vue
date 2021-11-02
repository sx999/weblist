<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
 *{
		margin: 0;
		padding: 0;
	}
  #app{
     font-family: PingFang SC-Bold, PingFang SC;
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
</style>