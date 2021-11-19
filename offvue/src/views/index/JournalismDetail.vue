<template>
    <div>
        <div class="box">
            <div class="title">{{this.list.consultTopic}}</div>
            <p class="date"><span class="iconfont icon-naozhong"></span>{{this.list.updateTime}}</p>
            <hr>
            <div class="text">
                <p v-html="this.list.consultSynopsis"></p>
            </div>
            <div class="image">   
                <!-- <img src="../../assets/images/unsplash_YRMWVcdymI.png" alt=""> -->
                <img :src="this.list.consultPic" alt="">
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:"",
            list:[]
        }
    },
    created(){
        let id=this.$route.query.id;
        this.id = id
        //console.log(id)
    },
    mounted(){
        this.Queryall()
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.tradeNews+'findAllId?id='+this.id)
            .then(res=>{
                //console.log(res)
                this.list = res.data.data
                this.list.updateTime = this.moment(this.list.updateTime).format("YYYY年MM月DD日")
                // this.Dateformatting()
            })
        }
          
    }
}
</script>
<style scoped>
    .box{
        width: 1000px;
        margin: 0 auto;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .box .title{
        margin-bottom: 10px;
        width: 100%;
        white-space:wrap;
        font-size: 40px;
        font-weight: 500;
        color: #333333;
    }
    .box .date{
        font-size: 20px;
        font-weight: 500;
        color: #777777;
    }
     .box .date span{
        margin-right: 10px;
        font-size:22px;
        color:#EA862A;
       
    }
    .box hr{
        width: 100%;
        height: 1px;
        background: #E8E8E8;    
    }
 
    .box .text{
        font-size: 20px;
        font-weight: 500;
        color: #5B5B5B;
    }
    .box .image{
        width: 100%;
        margin-top: 50px;
    }
    /* .box .image img{
        width: 100%;
       
    } */
</style>