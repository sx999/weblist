<template>
    <div class="block">
        <el-carousel :height="bannerHeight+'px'">
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
            ],
           bannerHeight:"",
        }
    },
    created(){
      
    },
   
    mounted(){
        var h= window.screen.height
        var w = window.screen.width
        console.log(h,w)
        if(h<992){
            this.bannerHeight=260
        }else if(w >=992){
            this.bannerHeight = 780
        }
    },
    methods:{

    }

    
}
</script>
<style scoped>
    .el-carousel__container {
        height: 100% !important;
    }
    img{
        display: inline-block;
        width: 100%;
        height:100%;
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