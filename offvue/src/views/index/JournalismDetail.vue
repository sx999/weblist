<template>
    <div>
        <div class="JournalismDetail-box">
            <div class="title">{{this.list.consultTopic}}</div>
            <p class="date">
                <span class="iconfont icon-naozhong"></span>{{this.list.startTime}}
            </p>
            <hr>
            <div class="text">
                <p v-html="this.list.consultSynopsis"></p>
            </div>
            <!-- <div class="image">   
                <img :src="this.list.consultPic" alt="">
            </div> -->
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
                // this.list.updateTime = this.moment(this.list.updateTime).format("YYYY年MM月DD日")
                this.list.startTime = this.moment(this.list.startTime).format("YYYY年MM月DD日")
                // this.Dateformatting()
            })
        }
          
    }
}
</script>
<style>
    .JournalismDetail-box{
        width: 1000px;
        margin: 0 auto;
        margin-top: 70px;
        /* font-family: PingFang SC-Medium, PingFang SC; */
    }
    .JournalismDetail-box .title{
        margin-bottom: 10px;
        text-align: center;
        width: 100%;
        white-space:wrap;
        font-size: 32px;
        font-weight: 500;
        color: #333333;
    }
    .JournalismDetail-box .date{
        font-size: 16px;
        font-weight: 500;
        color: #777777;
    }
     .JournalismDetail-box .date span{
        margin-right: 10px;
        font-size:22px;
        color:#EA862A;
       
    }
    .JournalismDetail-box hr{
        width: 100%;
        height: 1px;
        background: #E8E8E8;    
    }
 
    .JournalismDetail-box .text{
        font-size: 16px;
        font-weight: 500;
        color: #5B5B5B;
        text-align:left;
        line-height: 30px;
        margin: 0;
    }
    .JournalismDetail-box .text p{
        margin: 0;
    }
    .JournalismDetail-box .text p .ql-align-center{
        text-align:center;
    }
    .JournalismDetail-box .text p .ql-align-right{
        text-align:right;
    }
    
    /* .box .image{
        width: 100%;
        margin-top: 50px;
    } */
    /* .box .image img{
        width: 100%;
       
    } */
</style>