<template>
    <div class="block">
        <el-carousel height="">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
            <img :src="item.src" alt="">
            <!-- <img src="item.src:require('@/assets/images/img1.png')," alt=""> -->
            <!-- {{item.src}} -->
        </el-carousel-item>
        </el-carousel>
  </div>
</template>
<script>
import pic1 from '@/assets/images/img1.jpg'
import pic2 from '@/assets/images/img2.jpg'
import pic3 from '@/assets/images/img3.jpg'
export default {
    data(){
        return{
            imgs:[
              {src:pic1},
              {src:pic2},
              {src:pic3},
            ]
        }
    },
    created(){
      
    },
    mounted(){

    },
    methods:{

    }

    
}
</script>
<style scoped>
    .el-carousel__item img{
        width: 100%;
        height: 100%;
    }
    
    @media (max-width: 1920px){
         .block{
             height: 780px;
         }
    }
    @media (max-width: 768px){
         .block{
             height: 260px;
         }
    }
</style>