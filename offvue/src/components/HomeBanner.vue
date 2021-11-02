<template>
    <div class="block">
        <el-carousel :height="bannerHeight+'px'">
            <!-- <el-carousel height="780px"> -->
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <div class="pic_item">
                     <img class="small" :src="item.src" alt="">
                <!-- <img src="item.src:require('@/assets/images/img1.png')," alt=""> -->
                <!-- {{item.src}} -->
                    <div class="posit-element">
                        <p>{{item.text1}}</p>
                        <p>{{item.text2}}</p>
                        <div class="yello-d">了解更多</div>
                    </div>
                </div>
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
              {src:pic1,text1:'行由心教育No.1',text2:'测试文本1'},
              {src:pic2,text1:'行由心教育No.2',text2:'测试文本2'},
              {src:pic3,text1:'行由心教育No.3',text2:'测试文本3'},
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
   /* .el-carousel__indicator--horizontal .el-carousel__button {
        width: 20px !important;
        height: 20px !important;
        border-radius: 50% !important;
    }
    .el-carousel__indicator .el-carousel__button{
         width: 20px !important;
        height: 20px !important;
        border-radius: 50% !important;
    } */
    /* img{
        display: inline-block;
        width: 100%;
        height:100%;
    } */
    @media (max-width: 768px){
         .block{
             height: 260px;
         }
    }
    @media (max-width: 1920px){
         .block{
             height: 100%;
         }
         .small {
           position: absolute;
        }
         .pic_item {
            position: relative;
            height: 100%;
        }
         .pic_item:hover{
            cursor: pointer;
        }
         .pic_item img {
            width: 100%;
            height: 100%;
        }

         .pic_item .posit-element{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            position: absolute;
            right: 448px;
            bottom: 40%;
            color: #FFFFFF;
            font-family: PingFang SC-Bold, PingFang SC;
        }
        .pic_item .posit-element p:nth-child(1){
            font-size: 48px;
            font-weight: bold;
        }
        .pic_item .posit-element p:nth-child(2){
            margin: 16px 0 0 0 !important;
            font-size: 40px;
            font-weight: 500;
        }
         .pic_item .posit-element .yello-d{
            margin-top: 20px;
            width: 162px;
            height: 56px;
            text-align: center;
            line-height: 56px;
            font-size: 18px;
            font-weight: 500;
            background-color: #F2C723 ;
         }
         
    }
  
</style>