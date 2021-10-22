<template>
    <div>
        <!-- banner图 -->
        <Banner></Banner>

        <!-- 内容start -->
        <Content></Content>
        <!-- 内容end -->

        <!-- 底部start -->
        <Bootom></Bootom>
        <!-- 底部end -->
    </div>
</template>
<script>
//引入banner组件模板
import Banner from '@/components/HomeBanner.vue'
import Content from '@/components/HomeContent.vue'
import Bootom from '@/components/HomeBootom.vue'

export default {
    data(){
        return{
           
        }
    },
    components: {Banner,Content,Bootom},
    created(){
      
    },
    mounted(){

    },
    methods:{

    }

    
}
</script>
<style>
  
</style>