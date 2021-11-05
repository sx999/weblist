<template>
    <div>
        <!-- banner图 -->
        <Banner></Banner>
        
        <!-- 内容start -->
        <Center></Center>
        <!-- 内容end -->
    </div>
</template>
<script>
//引入banner组件模板
import Banner from '@/components/HomeBanner.vue'
import Center from '@/components/HomeCenter.vue'
export default {
    data(){
        return{
           
        }
    },
    components: {Banner,Center},
    created(){
      
    },
    mounted(){
            console.log(this.$api_router.login); // 打印出登录接口的路径
    },
    methods:{

    }

    
}
</script>
<style>
  
</style>