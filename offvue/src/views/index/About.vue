<template>
     <div>
         <div contenteditable="true"></div>
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
      return{
          show3: true
      }
    },
    created(){
    //   window.addEventListener('load', () => { // 滚动事件变为 scroll
    //       if (this.$route.path !== '/') { // /print 表示首页
    //             this.$router.replace('/') // 切换到首页
    //       }
    // })

    }

  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 1000px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>